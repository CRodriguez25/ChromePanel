import { TestBed, inject } from '@angular/core/testing';

import { BookmarkRepoService } from './bookmark-repo.service';

describe('BookmarkRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookmarkRepoService]
    });
  });

  it('should be created', inject([BookmarkRepoService], (service: BookmarkRepoService) => {
    expect(service).toBeTruthy();
  }));
});
