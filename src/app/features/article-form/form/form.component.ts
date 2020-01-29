import { Component, ChangeDetectorRef, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    private cdr: ChangeDetectorRef
  ) {}
  private _article: ArticleModel;
  @Input() get article(): ArticleModel {
    return this._article;
  }
  set article(value: ArticleModel) {
    console.log(value);
    this._article = value;
    this.formInitialize(this._article);
    this.isLoaded = true;
    this.cdr.detectChanges();
  }
  
  @Output() onCancel = new EventEmitter();
  @Output() onSubmit = new EventEmitter<any>();

  public isLoaded: boolean = false;

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

  private formInitialize(article: ArticleModel) {
    this.articleFormGroup.patchValue(article);
  }
}
