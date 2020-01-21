import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleModel } from "../../../models/article";
import { NotificationManagerService } from "../../../services/shared/notification-manager.service";
import { LocalStorageUserModel } from "../../../models/localStorageUserModel";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(
    private router: Router,
    private notification: NotificationManagerService
  ) { }

  @Input() article: ArticleModel;
  public localImgUrl: string = "";
  public isCreatedByMe: boolean = false;

  ngOnInit() {
    this.isCreatedByMe = this.article.author === localStorage.getItem(LocalStorageUserModel.name);
    this.localImgUrl = "/img/mock-img.png";
  }

  onEdit(id) {
    this.router.navigate([`/detail/${id}`]);
  }
  onDelete(id) {
    this.notification.infoNotification("Feature coming soon");
  }
}
