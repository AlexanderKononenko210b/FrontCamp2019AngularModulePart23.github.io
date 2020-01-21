import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleModel } from "../../models/article";
import { NotificationManagerService } from '../../services/shared/notification-manager.service';
import { articles } from "../../static/articles";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notification: NotificationManagerService
  ) { }
  
  public title: string = "";
  public article: ArticleModel;
  public localImgUrl: string = "";

  ngOnInit() {
    this.localImgUrl = "/img/mock-img.png";

    this.route.params.subscribe(param => {
      if(param['id']) {
        this.article = articles.find(record => {
          return record.id === param['id'];
        });
      }
    },
    error => this.notification.errorNotification(error));
    this.title = this.article.publishedAt != ""
      ? this.article.publishedAt
      : "Edit";
  }

  public onEdit(id: string) {
    this.router.navigate([`/form/${id}`]);
  }

  public onDelete(id: string) {
    this.notification.infoNotification("Feature coming soon");
  }
}
