import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ArticleModel } from "../../../models/article";
import { LocalStorageUserModel } from "../../../models/localStorageUserModel";

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss']
})
export class ArticleInfoComponent implements OnInit {

  constructor() { }

  @Input() article: ArticleModel;
  @Output() onEdit = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();
  public isCreatedByMy: boolean;
  
  edit(id:string) {
    this.onEdit.emit(id);
  }
  delete(id:string) {
    this.onDelete.emit(id);
  }

  ngOnInit() {
    this.isCreatedByMy = localStorage.getItem(LocalStorageUserModel.name) === this.article.author;
  }
}
