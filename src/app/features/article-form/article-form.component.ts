import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleModel } from "../../models/article";
import { articles } from "../../static/articles";
import { NotificationManagerService } from "../../services/shared/notification-manager.service";
import { LocalStorageUserModel } from "../../models/localStorageUserModel";

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  constructor(
    private notification: NotificationManagerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public article: ArticleModel = new ArticleModel("", "", "", "", "", "", "", "");
  public id: string = "";
  public updateMode: boolean = false;
  public title: string = "Create";
  public dateNow: string = "";

  ngOnInit() {
    const date = new Date(Date.now());
    this.dateNow = date.toLocaleString();
    this.route.params.subscribe(param => {
      if(param["id"]) {
        this.article = articles.find(article => article.id === param["id"]);
        this.id = this.article ? param["id"] : "";
        this.updateMode = this.id ? true : false;
        this.title = this.updateMode ? "Edit" : "Create";
      } else {
        this.article.author = localStorage.getItem(LocalStorageUserModel.name);
        this.article.publishedAt = this.dateNow;
      }
    },
    error => this.notification.errorNotification(error.message));
  }

  onCancel() {
      if(this.id) {
        this.router.navigate([`/detail/${this.id}`]);
      } else {
        this.router.navigate([``]);
      }
  }
}
