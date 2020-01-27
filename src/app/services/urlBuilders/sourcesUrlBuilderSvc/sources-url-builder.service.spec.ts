import { TestBed } from '@angular/core/testing';

import { SourcesUrlBuilderService } from './sources-url-builder.service';

describe('SourcesUrlBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SourcesUrlBuilderService = TestBed.get(SourcesUrlBuilderService);
    expect(service).toBeTruthy();
  });
});
