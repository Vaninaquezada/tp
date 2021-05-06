import { TestBed } from '@angular/core/testing';

import { CanActivateComponentGuard } from './can-activate-component.guard';

describe('CanActivateComponentGuard', () => {
  let guard: CanActivateComponentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateComponentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
