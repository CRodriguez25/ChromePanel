import { Injectable } from '@angular/core';

@Injectable()
export class BookmarkRepoService {
	constructor() { }
	
	public subscribe(subscriber: IBookmarkRepoSubscriber): Bookmark[] {
		var result = [];
		var bookmark1 = new Bookmark("www.google.com", "Google");
		var bookmark2 = new Bookmark("www.stackoverflow.com", "Stack Overflow");
		var bookmark3 = new Bookmark("www.facebook.com", "Facebook");
		var bookmark4 = new Bookmark("https://github.com/CRodriguez25/EliteDangerousPanel", "Elite Panel Repo");
		var bookmark5 = new Bookmark("url5", "title5");		
		result.push(bookmark1);
		result.push(bookmark2);
		result.push(bookmark3);
		result.push(bookmark4);
		result.push(bookmark5);
		return result;
	}
}


export class Bookmark {
	constructor(public Url: string, public Title: string) { }
}

export interface IBookmarkRepoSubscriber {
	BookmarksUpdated(bookmarks: Bookmark[]): void;
}