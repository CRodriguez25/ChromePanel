import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { BookmarkRepoService } from './services/bookmark-repo/bookmark-repo.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCarouselModule
  ],
  providers: [BookmarkRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
