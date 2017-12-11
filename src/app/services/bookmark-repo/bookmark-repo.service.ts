import { Injectable } from '@angular/core';

@Injectable()
export class BookmarkRepoService {
	constructor() { }
	
	public Subscribe(subscriber: IBookmarkRepoSubscriber): Bookmark[] {
		var result = [];
		var bookmark1 = new Bookmark("url1", "title1");
		var bookmark2 = new Bookmark("url2", "title2");
		var bookmark3 = new Bookmark("url3", "title3");
		var bookmark4 = new Bookmark("url4", "title4");
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