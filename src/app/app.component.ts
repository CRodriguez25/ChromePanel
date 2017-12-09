import { Component } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public carouselOne: NgxCarousel;
	ngOnInit() {
		this.carouselOne = {
			grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
			slide: 1,
			speed: 400,
			interval: 4000,
			point: {
				visible: true
			},
			load: 2,
			touch: true,
			loop: true
		}
	}
	
	public myfunc(event: Event) {
		
	}
}