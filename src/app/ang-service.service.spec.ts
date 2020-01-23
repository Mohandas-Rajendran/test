import { TestBed } from '@angular/core/testing';

import { AngServiceService } from './ang-service.service';

describe('AngServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngServiceService = TestBed.get(AngServiceService);
    expect(service).toBeTruthy();
  });
});
