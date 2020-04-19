import { TestBed } from '@angular/core/testing';

import { SpectatorsService } from './spectators.service';

describe('SpectatorsService', () => {
  let service: SpectatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpectatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
