import { TestBed } from '@angular/core/testing';

import { UrlBuilderFactoryService } from './url-builder-factory.service';

describe('UrlBuilderFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlBuilderFactoryService = TestBed.get(UrlBuilderFactoryService);
    expect(service).toBeTruthy();
  });
});
