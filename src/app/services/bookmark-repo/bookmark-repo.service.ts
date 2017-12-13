import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class BookmarkRepoService {
	private _eventSubscriptions: Set<IBookmarkRepoSubscriber>;
	
	constructor(private zone: NgZone) { 
        var windowRef = this.getWindowRef();
        this._eventSubscriptions = new Set();
        windowRef.PanelsApp = windowRef.PanelsApp || {};
        windowRef.PanelsApp.ReceiveData = (event) => this.receiveData(event);
    }
    
    private receiveData(event): void {
        this.zone.run(() => {
            this._eventSubscriptions.forEach((subscriber) => {
                subscriber.BookmarksUpdated(event);
            });
        });
    }
    
	public subscribe(subscriber: IBookmarkRepoSubscriber): Bookmark[] {
		this._eventSubscriptions.add(subscriber);
		
		var result = [];
		var newResult = [];
		var bookmark1 = new Bookmark("www.google.com", "Google");
		var bookmark2 = new Bookmark("www.stackoverflow.com", "Stack Overflow");
		var bookmark3 = new Bookmark("www.facebook.com", "Facebook");
		var bookmark4 = new Bookmark("https://github.com/CRodriguez25/EliteDangerousPanel", "Elite Panel Repo");
		var bookmark5 = new Bookmark("yahoo.com", "Yahoo");		
		result.push(bookmark1);
		newResult.push(bookmark1);
		newResult.push(new Bookmark("www.macrumors.com", "MacRumors"));
		result.push(bookmark2);
		newResult.push(bookmark2);
		result.push(bookmark3);
		newResult.push(bookmark3);
		result.push(bookmark4);
		newResult.push(bookmark4)
		result.push(bookmark5);
		newResult.push(bookmark5)
		setTimeout(() => this.receiveData(newResult), 5000);
		
		return result;
		
		
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