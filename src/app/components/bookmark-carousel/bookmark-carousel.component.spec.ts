import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkCarouselComponent } from './bookmark-carousel.component';

describe('BookmarkCarouselComponent', () => {
  let component: BookmarkCarouselComponent;
  let fixture: ComponentFixture<BookmarkCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
