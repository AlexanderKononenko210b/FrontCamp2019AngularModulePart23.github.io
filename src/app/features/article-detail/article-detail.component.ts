import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { ArticleModel } from "../../models/article";
import { NotificationManagerService } from '../../services/shared/notificationSvc/notification-manager.service';
import { ArticlesService } from "../../services/articleSvc/articles.service";
import { ArticleInfoComponent } from "./article-info/article-info.component";
import { Constants } from "../../config/app.constants";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notification: NotificationManagerService,
    private articleSvc: ArticlesService,
    private location: Location
  ) { }
  
  public title: string = "";
  public article: ArticleModel;
  public localImgUrl: string = "";
  public isLoading: boolean = false;

  @ViewChild(ArticleInfoComponent, {static: false})
  private articleInfo: ArticleInfoComponent;

  ngOnInit() {
    this.localImgUrl = "/img/mock-img.png";

    this.route.params.subscribe(param => {
      if(param['id']) {
        this.getArticleById(param['id']);
      }
    },
    error => this.notification.errorNotification(error));
  }

  public onEdit(id: string) {
    this.router.navigate([`/form/${id}`]);
  }

  public onDelete(id: string) {
    this.articleSvc.deleteArticle(id)
      .subscribe(result => {
        if(result.n > 0 && result.ok > 0 && result.deletedCount > 0) {
          this.notification.okNotification(Constants.messages[4](id));
          this.location.back();
        } else if(result.n === 0) {
          this.notification.alertNotification(Constants.messages[5](id));
        }
      },
      error => this.notification.errorNotification(error));
  }

  private getArticleById(id: string) {
    this.articleSvc.getCustomArticle(id)
      .subscribe(result => {
        this.article = result;
        this.title = this.article.publishedAt != ""
          ? this.article.publishedAt
          : "Edit";
        this.articleInfo.articleInitialize(this.article);
        this.isLoading = true;
      },
      error => this.notification.errorNotification(error));
  }
}
