import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookmark-link',
  templateUrl: './bookmark-link.component.html',
  styleUrls: ['./bookmark-link.component.css']
})
export class BookmarkLinkComponent implements OnInit {
    @Input() public bookmark: any;
    public logoLoaded: boolean = false;
    
    constructor() { }
    ngOnInit() { }

    public truncate(string) {
        if (string.length > 40)
           return string.substring(0,40)+'...';
        else
           return string;
    };


    public bookmarkPressed() {
        window.location.href = "panelsapp://BookmarkPressed?url=" + this.bookmark.Url;
    }
}
