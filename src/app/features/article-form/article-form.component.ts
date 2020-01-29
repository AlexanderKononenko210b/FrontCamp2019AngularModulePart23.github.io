import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Constants } from "../../config/app.constants";
import { ArticleModel } from "../../models/article";
import { NotificationManagerService } from "../../services/shared/notificationSvc/notification-manager.service";
import { LocalStorageUserModel } from "../../models/local-storage-user-model";
import { FormTitle } from "../../config/app.enums";
import { ArticlesService } from "../../services/articleSvc/articles.service";
import { HelperService } from "../../services/shared/helperSvc/helper.service";

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
  })
export class ArticleFormComponent implements OnInit {

  constructor(
    private notification: NotificationManagerService,
    private route: ActivatedRoute,
    private router: Router,
    private articleSvc: ArticlesService
  ) {}

  public article: ArticleModel = new ArticleModel("","","","","","","","");
  public id: string = "";
  public updateMode: boolean = false;
  public title: FormTitle = FormTitle.Create;
  public dateNow: string = "";

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.id = param["id"] ? param["id"] : "";
      this.updateMode = param["id"] ? true : false;
      if(this.updateMode) {
        this.getArticleById(this.id);
      } else {
        const date = new Date(Date.now());
        this.dateNow = date.toISOString();
        this.article.author = localStorage.getItem(LocalStorageUserModel.name);
        this.article.publishedAt = this.dateNow;
      }
    });
  }

  onSubmit(article: ArticleModel) {
    this.addUpdateAction(article);
  }

  onCancel() {
      if(this.id) {
        this.router.navigate([`/detail/${this.id}`]);
      } else {
        this.router.navigate([``]);
      }
  }

  private getArticleById(id: string) {
    this.articleSvc.getCustomArticle(id)
      .subscribe(result => {
        this.article = result;
        this.id = this.article ? id : "";
        this.updateMode = this.id ? true : false;
        this.title = this.updateMode ? FormTitle.Edit : FormTitle.Create;
      },
      error => this.notification.errorNotification(error));
  }

  private addUpdateAction(article: ArticleModel) {
    if(this.updateMode) {
      article._id = this.id;
      this.articleSvc.updateArticle(this.id, HelperService.mapArticleToServerUpdateModel(article))
        .subscribe(result => {
          if(result.n > 0 && result.nModified > 0 && result.ok > 0) {
            this.notification.okNotification(Constants.messages[1](this.id));
          } else if(result.n > 0 && result.ok > 0) {
            this.notification.alertNotification(Constants.messages[2](this.id));
          } else {
            this.notification.alertNotification(Constants.messages[3](this.id));
          }
        },
        error => this.notification.errorNotification(error));
    } else {
      this.articleSvc.addNewArticle(article)
        .subscribe(result => {
          if(result) {
            this.notification.okNotification(Constants.messages[0](result._id));
          }
        },
        error => this.notification.errorNotification(error));
    }
  }
}
