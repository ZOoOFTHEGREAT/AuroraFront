import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accountsettingGuard } from './accountsetting.guard';

describe('accountsettingGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accountsettingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
