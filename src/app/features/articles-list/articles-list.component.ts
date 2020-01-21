import { Component, OnInit } from '@angular/core';

import { ArticleModel } from "../../models/article";
import { NotificationManagerService } from "../../services/shared/notification-manager.service";
import { articles } from "../../static/articles";
import { LocalStorageUserModel } from "../../models/localStorageUserModel";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  constructor(
    private notification: NotificationManagerService,
  ) {}

  public articles: ArticleModel[] = [];
  public sources: string[] = [];
  public selectedSource: string = "";
  public inputFilter: string = "";
  public title: string = "";
  public isCreatedByMe: boolean = false;
  private numberOfPage: number = 1;

  ngOnInit() {
    this.articles = articles.slice(0, 5);
    this.sources = [
      "All sources",
      "Custom",
      "BBC",
      "CNN"
    ];
    this.selectedSource = this.sources.length > 0
      ? this.sources[0]
      : "";
    this.title = "Articles";
  }

  onSourceChange(source: string) {
    this.selectedSource = source;
    //todo go to specific articles using service
    this.title = this.selectedSource == "All sources"
      ? "Articles"
      : this.selectedSource;
  }

  onFilterChange(filter: string) {
    this.inputFilter = filter;
  }

  onCheckedByMe(value: boolean) {
    this.isCreatedByMe = value;
    if(this.isCreatedByMe) {
      const userName = localStorage.getItem(LocalStorageUserModel.name);
      this.articles = this.articles.filter(article => {
        return article.author === userName;
      })
    } else {
      this.articles = articles;
    }
  }

  onFilterClick() {
    console.log(this.inputFilter);
    this.notification.infoNotification(`Enter: ${this.inputFilter}. Feature coming soon.`);
    //todo go to specific articles using service
  }

  onLoadMore() {
    console.log("LoadMore");
    let actualNumber = this.numberOfPage;
    const nextNumber = ++actualNumber;
    const existRecords = articles.length / 5;
    if(nextNumber > existRecords) {
      this.articles = articles;
    } else {
      this.numberOfPage = nextNumber;
      this.articles = articles.slice(0, nextNumber + 1);
    }
  }
}
