import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleAuthGuard } from './role-auth.guard';

describe('roleAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roleAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
