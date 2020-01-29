import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ArticleModel } from "../../../models/article";
import { LocalStorageUserModel } from "../../../models/local-storage-user-model";

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss']
})
export class ArticleInfoComponent {

  private _article: ArticleModel;
  @Input() get article(): ArticleModel{
    return this._article;
  };
  set article(value: ArticleModel) {
    this._article = value;
    this.articleInitialize(this._article);
    this.isLoading = true;
  }
  
  @Output() onEdit = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();

  public isCreatedByMe: boolean;
  public isLoading: boolean;
  
  edit(id:string) {
    this.onEdit.emit(id);
  }
  delete(id:string) {
    this.onDelete.emit(id);
  }

  private articleInitialize(article: ArticleModel) {
    this.isCreatedByMe = localStorage.getItem(LocalStorageUserModel.name) === article.author;
  }
}
