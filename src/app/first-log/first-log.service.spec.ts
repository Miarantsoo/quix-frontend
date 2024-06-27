import { TestBed } from '@angular/core/testing';

import { FirstLogService } from './first-log.service';

describe('FirstLogService', () => {
  let service: FirstLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
