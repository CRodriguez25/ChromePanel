import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-folder-modal',
  templateUrl: './folder-modal.component.html',
  styleUrls: ['./folder-modal.component.css']
})
export class FolderModalComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<FolderModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        
        }

    ngOnInit() {
    }

    public close($event): void {
        this.dialogRef.close();
    }
}
