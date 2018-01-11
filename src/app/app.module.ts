import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { BookmarkRepoService } from './services/bookmark-repo/bookmark-repo.service';
import { BookmarkLinkComponent } from './components/bookmark-link/bookmark-link.component';
import { BookmarkFolderComponent } from './components/bookmark-folder/bookmark-folder.component';
import { BookmarkCarouselComponent } from './components/bookmark-carousel/bookmark-carousel.component';
import { FolderModalComponent } from './components/folder-modal/folder-modal.component'
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkLinkComponent,
    BookmarkFolderComponent,
    BookmarkCarouselComponent,
    FolderModalComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgxCarouselModule,
  ],
  entryComponents: [FolderModalComponent],
  providers: [BookmarkRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
