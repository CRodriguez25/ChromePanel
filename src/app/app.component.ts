import { Component } from '@angular/core';
import { Bookmark, BookmarkRepoService, IBookmarkRepoSubscriber } from './services/bookmark-repo/bookmark-repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements IBookmarkRepoSubscriber {
	private _bookmarks;
	
	constructor(private _bookMarkRepoService: BookmarkRepoService) {
		this._bookmarks = _bookMarkRepoService.subscribe(this);
	}
	
	ngOnInit() {
		
	}
	
	public BookmarksUpdated(bookmarks) {
        this._bookmarks = bookmarks;
    }
}
