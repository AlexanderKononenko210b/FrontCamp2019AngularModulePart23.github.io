import { TestBed } from '@angular/core/testing';

import { TopHeadlinesUrlBuilderService } from './top-headlines-url-builder.service';

describe('TopHeadlinesUrlBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopHeadlinesUrlBuilderService = TestBed.get(TopHeadlinesUrlBuilderService);
    expect(service).toBeTruthy();
  });
});
