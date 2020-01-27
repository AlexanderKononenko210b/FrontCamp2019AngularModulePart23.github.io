import { TestBed } from '@angular/core/testing';

import { FetchWrapperService } from './fetch-wrapper.service';

describe('FetchWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchWrapperService = TestBed.get(FetchWrapperService);
    expect(service).toBeTruthy();
  });
});
