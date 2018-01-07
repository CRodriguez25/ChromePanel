import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class BookmarkRepoService {
	private _eventSubscriptions: Set<IBookmarkRepoSubscriber>;
	private _receivedBookmarks: Bookmark[] = [];
	constructor(private zone: NgZone) { 
        var windowRef = this.getWindowRef();
        this._eventSubscriptions = new Set();
        windowRef.PanelsApp = windowRef.PanelsApp || {};
        windowRef.PanelsApp.ReceiveData = (event) => this.receiveData(event);
    }
    
    private receiveData(event): void {
        var bookmarksBar = event.roots.bookmark_bar;
        var allBookmarks: any[] = bookmarksBar.children;
        var urlBookmarks = allBookmarks.filter(bookmark => {
            return bookmark.type == "url";
        });
        var result = urlBookmarks.map(x => {
            return new Bookmark(x.url, x.name);
        });

        this.zone.run(() => {
            this._receivedBookmarks = result;
            this._eventSubscriptions.forEach((subscriber) => {
                subscriber.BookmarksUpdated(result);
            });
        });
    }
    
	public subscribe(subscriber: IBookmarkRepoSubscriber): Bookmark[] {
		this._eventSubscriptions.add(subscriber);
		return this._receivedBookmarks;
	}
	
	private getWindowRef(): any {
        return window;
    }
}


export class Bookmark {
	constructor(public Url: string, public Title: string) { }
}

export interface IBookmarkRepoSubscriber {
	BookmarksUpdated(bookmarks: Bookmark[]): void;
}