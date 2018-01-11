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
    
    private createBookmarkItems(receiveData: any): any[] {
        var result = receiveData.map(x => {
            switch(x.type) {
                case "url":
                    return new Bookmark(x.url, x.name);
                case "folder":
                    return new Folder(x.name, this.createBookmarkItems(x.children));
            }
        });

        return result;
    }

    private receiveData(event): void {
        var bookmarksBar = event.roots.bookmark_bar;
        var allBookmarks: any[] = bookmarksBar.children;
        var urlBookmarks = allBookmarks.filter(bookmark => {
            return bookmark.type == "url"|| bookmark.type == "folder";
        });

        var result = this.createBookmarkItems(urlBookmarks);
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
    public Type: string = "Bookmark";
	constructor(public Url: string, public Title: string) { }
}

export class Folder {
    public Type: string = "Folder";
    constructor(public Title: string, public children: any[]) { }
}

export interface IBookmarkRepoSubscriber {
	BookmarksUpdated(bookmarks: any[]): void;
}