import { TestBed, inject } from '@angular/core/testing';

import { TopnavService } from './topnav.service';

describe('TopnavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopnavService]
    });
  });

  it('should be created', inject([TopnavService], (service: TopnavService) => {
    expect(service).toBeTruthy();
  }));
});
