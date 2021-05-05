import { TestBed } from '@angular/core/testing';

import { CharServiceService } from './char-service.service';

describe('CharServiceService', () => {
  let service: CharServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
