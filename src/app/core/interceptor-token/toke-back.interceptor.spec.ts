import { TestBed } from '@angular/core/testing';

import { TokeBackInterceptor } from './toke-back.interceptor';

describe('TokeBackInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokeBackInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokeBackInterceptor = TestBed.inject(TokeBackInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
