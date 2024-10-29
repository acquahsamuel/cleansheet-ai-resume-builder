import { TestBed } from '@angular/core/testing';

import { CvContentService } from './cv-content.service';

describe('CvContentService', () => {
  let service: CvContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
