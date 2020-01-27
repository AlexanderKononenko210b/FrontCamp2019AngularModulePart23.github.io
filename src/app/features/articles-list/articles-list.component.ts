import { Component, OnInit } from '@angular/core';

import { ArticleModel } from "../../models/article";
import { SourceModel } from "../../models/source-model";
import { NotificationManagerService } from "../../services/shared/notificationSvc/notification-manager.service";
import { Constants } from "../../config/app.constants";
import { UrlBuilderType } from "../../config/app.enums";
import { LocalStorageUserModel } from "../../models/local-storage-user-model";
import { ArticlesService } from "../../services/articleSvc/articles.service";
import { UrlBuilderFactoryService } from "../../services/factories/urlBuilderFactorySvc/url-builder-factory.service";
import { HelperService } from "../../services/shared/helperSvc/helper.service";
import { Config } from 'src/app/config/app.config';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  constructor(
    private notification: NotificationManagerService,
    private articleSvc: ArticlesService,
    private urlBuilderFactory: UrlBuilderFactoryService
  ) {}

  public articles: ArticleModel[] = [];
  private allArticles: ArticleModel[] = [];
  public sources: SourceModel[] = [];
  public inputFilter: string = "";
  public title: string = "";
  public isCreatedByMe: boolean = false;
  public selectedSources: string = Constants.sources[0].id;
  private numberOfPage: number = 1;


  ngOnInit() {
    this.loadCustomArticles();
    this.loadSources();
    this.title = Constants.sources[0].name;
  }

  onSourceChange(selectedSource: string) {
    this.selectedSources = selectedSource;
    this.loadArticles(selectedSource);
  }

  onCheckedByMe(value: boolean) {
    this.isCreatedByMe = value;
    this.loadCustomArticles();
    this.selectedSources = Constants.sources[0].id;
    this.title = Constants.sources[0].name;
  }

  onFilterClick(filter: string) {
    this.inputFilter = filter;
  }

  onDelete(id: string) {
    this.articleSvc.deleteArticle(id)
      .subscribe(result => {
        if(result.n > 0 && result.ok > 0 && result.deletedCount > 0) {
          this.notification.okNotification(Constants.messages[4](id));
          this.loadCustomArticles();
        } else if(result.n === 0) {
          this.notification.alertNotification(Constants.messages[5](id));
        }
      },
      error => this.notification.errorNotification(error));
  }

  onLoadMore() {
    let actualNumber = this.numberOfPage;
    const nextNumber = ++actualNumber;
    const existRecords = this.allArticles.length / Config.NUMBER_ARTICLE_TO_SHOW;
    if(nextNumber > existRecords) {
      this.articles = this.allArticles;
    } else {
      this.numberOfPage = nextNumber;
      this.articles = this.allArticles.slice(0, nextNumber * Config.NUMBER_ARTICLE_TO_SHOW + 1);
    }
  }

  private loadArticles(selectedSource: string) {
    this.title = this.sources.find(source => source.id === selectedSource).name;
    const urlBuilderSvc = this.urlBuilderFactory.create(UrlBuilderType.TopHeadLines);
    let url: string = urlBuilderSvc.build();
    if(selectedSource === Constants.sources[0].id) {//if custom articles go to database
      this.loadCustomArticles(); return;
    } else if(selectedSource !== Constants.sources[1].id) {//if specify api sources go to api source
      url = urlBuilderSvc.build(selectedSource);
    }

    this.articleSvc.getExternalArticles(url)
      .subscribe(result => {
        this.allArticles = result.articles
          .map(apiArticle => HelperService.mapApiToArticle(apiArticle));
        this.articles = this.allArticles
          .slice(0, Config.NUMBER_ARTICLE_TO_SHOW);
      },
      error => this.notification.errorNotification(error));
  }

  private loadSources() {
    const urlBuilder = this.urlBuilderFactory.create(UrlBuilderType.Sources);
    const url = urlBuilder.build();
    this.articleSvc.getSources(url).subscribe(result => {
        const apiSources = result.sources.map(source => {
          return new SourceModel(source.id, source.name);
        }).slice(0,10);
        this.sources = [...this.sources, ...Constants.sources, ...apiSources];
      })
  }

  private loadCustomArticles() {
    this.articleSvc.getAllCustomArticles()
        .subscribe(result => {
          this.allArticles = result;
          this.articles = result.slice(0, Config.NUMBER_ARTICLE_TO_SHOW);
        },
        error => this.notification.errorNotification(error));
  }
}
