import { Injectable } from '@angular/core';

import { SourcesUrlBuilderService } from "../../../services/urlBuilders/sourcesUrlBuilderSvc/sources-url-builder.service";
import { TopHeadlinesUrlBuilderService } from "../../../services/urlBuilders/topHeadlinesUrlBuilderSvc/top-headlines-url-builder.service";

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderFactoryService {

  public static getBuilders() {
    return {
      sources: SourcesUrlBuilderService,
      topHeadLines: TopHeadlinesUrlBuilderService
    }
  }

  public create(type: string = "topHeadlines") {
    const UrlBuilder = UrlBuilderFactoryService.getBuilders()[type] || UrlBuilderFactoryService.getBuilders().topHeadLines;
    return new UrlBuilder();
  }
}
