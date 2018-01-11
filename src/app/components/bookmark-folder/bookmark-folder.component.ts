import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FolderModalComponent } from '../folder-modal/folder-modal.component';

@Component({
  selector: 'app-bookmark-folder',
  templateUrl: './bookmark-folder.component.html',
  styleUrls: ['./bookmark-folder.component.css']
})
export class BookmarkFolderComponent implements OnInit {
    @Input() private folder: any;
    constructor(public dialog: MatDialog) { }

    ngOnInit() {
    }

    public openFolder(): void {
        if (!(this.folder.children.length > 0 && this.folder.children[0].Type === 'Close')) {
            this.folder.children.unshift({
                Type: 'Close' 
            });
        }


        let dialogRef = this.dialog.open(FolderModalComponent, {
            height: '100vh',
            hasBackdrop: true,
            data: { items: this.folder.children }
        });
    }
}
