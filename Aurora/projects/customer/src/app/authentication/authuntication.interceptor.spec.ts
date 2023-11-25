import { TestBed } from '@angular/core/testing';

import { AuthunticationInterceptor } from './authuntication.interceptor';

describe('AuthunticationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthunticationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthunticationInterceptor = TestBed.inject(AuthunticationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
