import { TestBed } from '@angular/core/testing';

import { StateStorageService } from './state-storage.service';

describe('StateStorageService', () => {
  let service: StateStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
