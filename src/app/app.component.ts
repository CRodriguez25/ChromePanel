import { Component } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { Bookmark, BookmarkRepoService, IBookmarkRepoSubscriber } from './services/bookmark-repo/bookmark-repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements IBookmarkRepoSubscriber {
	private _bookmarks: Bookmark[];
	
	constructor(private _bookMarkRepoService: BookmarkRepoService) {
		this._bookmarks = _bookMarkRepoService.subscribe(this);
	}
	
	public carouselOne: NgxCarousel;
	ngOnInit() {
		this.carouselOne = {
			grid: {xs: 3, sm: 3, md: 4, lg: 5, all: 0},
			slide: 2,
			speed: 400,
			point: {
				visible: true
			},
			load: 1,
			touch: true
		}
	}
	
	public BookmarksUpdated(bookmarks: Bookmark[]) {
		this._bookmarks = bookmarks;
	}
}
