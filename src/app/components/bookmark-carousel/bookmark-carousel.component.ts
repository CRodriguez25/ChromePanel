import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-bookmark-carousel',
  templateUrl: './bookmark-carousel.component.html',
  styleUrls: ['./bookmark-carousel.component.css']
})
export class BookmarkCarouselComponent implements OnInit {
    @Input("bookmarks") private _items: any[];
    @Output() close = new EventEmitter();

    public carouselOne: NgxCarousel;
    constructor() { }
    ngOnInit() {
        this.carouselOne = {
			grid: {xs: 4, sm: 4, md: 4, lg: 4, all: 0},
			speed: 400,
			point: {
				visible: true
			},
			load: 1,
			touch: true
		}
    }

    public handleClose() {
        this.close.emit();
    }
}
