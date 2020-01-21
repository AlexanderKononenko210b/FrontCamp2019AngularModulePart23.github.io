import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationManagerService } from "../../../services/shared/notification-manager.service";

import { ArticleModel } from "../../../models/article";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private notification: NotificationManagerService
  ) { }

  @Input() article: ArticleModel;
  @Output() onCancel = new EventEmitter();

  //controls
  public titleControl: FormControl = new FormControl("", [Validators.required]);
  public descriptionControl: FormControl = new FormControl("");
  public contentControl: FormControl = new FormControl("", [Validators.required]);
  public urlToImageControl: FormControl = new FormControl("");
  public publishedAtControl: FormControl = new FormControl("");
  public authorControl: FormControl = new FormControl("");
  public urlControl: FormControl = new FormControl("");
  public articleFormGroup: FormGroup = new FormGroup({
    title: this.titleControl,
    description: this.descriptionControl,
    content: this.contentControl,
    urlToImage: this.urlToImageControl,
    publishedAt: this.publishedAtControl,
    author: this.authorControl,
    url: this.urlControl
  })

  urlImageSelect(value: boolean) {
    this.urlToImageControl.setValue(value ? this.article.urlToImage : "/src/assets/img/mock-img.png");
  }

  onSubmit() {
    console.log(this.articleFormGroup.value);
    this.notification.infoNotification("Feature coming soon");
  }

  cancel() {
    this.onCancel.emit();
  }

  ngOnInit() {
    this.titleControl.setValue(this.article.title);
    this.descriptionControl.setValue(this.article.description);
    this.contentControl.setValue(this.article.content);
    this.urlToImageControl.setValue(this.article.urlToImage);
    this.publishedAtControl.setValue(this.article.publishedAt);
    this.authorControl.setValue(this.article.author);
    this.urlControl.setValue(this.article.url);
  }
}
