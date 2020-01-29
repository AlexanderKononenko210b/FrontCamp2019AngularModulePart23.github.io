import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationManagerService } from "../../../services/shared/notificationSvc/notification-manager.service";

import { ArticleModel } from "../../../models/article";
import { Config } from "../../../config/app.config";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {

  constructor(
    private notification: NotificationManagerService
  ) { }
  
  @Input() article: ArticleModel;
  @Input() isLoaded: boolean;
  @Output() onCancel = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

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
    this.urlToImageControl.setValue(value ? this.article.urlToImage : Config.PATH_TO_LOCAL_IMG);
  }

  submit() {
    this.onSubmit.emit(this.articleFormGroup.value)
  }

  cancel() {
    this.onCancel.emit();
  }

  public formInitialize(article: ArticleModel) {
    this.article = article;
    this.articleFormGroup.patchValue(this.article);
  }
}
