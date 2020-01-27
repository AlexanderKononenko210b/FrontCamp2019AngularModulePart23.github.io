import { TestBed } from '@angular/core/testing';

import { MapService } from './helper.service';

describe('MapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelperService = TestBed.get(MapService);
    expect(service).toBeTruthy();
  });
});
