import { TestBed } from '@angular/core/testing';

import { ListeClientService } from './liste-client.service';

describe('ListeClientService', () => {
  let service: ListeClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
