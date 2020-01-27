import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleModel } from "../../../models/article";
import { NotificationManagerService } from "../../../services/shared/notificationSvc/notification-manager.service";
import { LocalStorageUserModel } from "../../../models/local-storage-user-model";
import { Config } from "../../../config/app.config";

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
  @Output() onDelete = new EventEmitter<string>();
  public localImgUrl: string = "";
  public isCreatedByMe: boolean = false;

  ngOnInit() {
    this.isCreatedByMe = this.article.author === localStorage.getItem(LocalStorageUserModel.name);
    this.localImgUrl = Config.PATH_TO_LOCAL_IMG;
  }

  onEdit(id) {
    this.router.navigate([`/detail/${id}`]);
  }
  delete(id) {
    this.onDelete.emit(id);
  }
}
