import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ArticleModel } from "../../../models/article";
import { LocalStorageUserModel } from "../../../models/local-storage-user-model";

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss']
})
export class ArticleInfoComponent {

  @Input() article: ArticleModel;
  @Input() isLoading: boolean;
  @Output() onEdit = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();
  public isCreatedByMe: boolean;
  
  edit(id:string) {
    this.onEdit.emit(id);
  }
  delete(id:string) {
    this.onDelete.emit(id);
  }

  articleInitialize(article: ArticleModel) {
    this.article = article;
    this.isCreatedByMe = localStorage.getItem(LocalStorageUserModel.name) === this.article.author;
  }
}
