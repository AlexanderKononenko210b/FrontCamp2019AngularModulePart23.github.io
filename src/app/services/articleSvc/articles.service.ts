import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiModel } from "../../models/api-model";
import { ApiSourcesModel } from "../../models/api-sources-model";
import { ArticleModel } from "../../models/article";
import { UpdateModel } from "../../models/update-model";
import { DeleteModel } from "../../models/delete-model";
import { ServerUpdateModel } from "../../models/server-update-model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient,
  ) { }

  private customApiUrl: string = `${environment.apiUrl}news/`;

  getSources(url: string) {
    return this.http.get<ApiSourcesModel>(url);
  }

  getExternalArticles(url: string) {
    return this.http.get<ApiModel>(url);
  }

  getAllCustomArticles() {
    return this.http.get<ArticleModel[]>(`${this.customApiUrl}`);
  }

  getCustomArticle(id: string) {
    return this.http.get<ArticleModel>(`${this.customApiUrl}${id}`);
  }

  addNewArticle(article: ArticleModel) {
    return this.http.post<ArticleModel>(`${this.customApiUrl}`, article);
  }

  updateArticle(id: string, article: ServerUpdateModel[]) {
    return this.http.put<UpdateModel>(`${this.customApiUrl}${id}`, article);
  }

  deleteArticle(id: string) {
    return this.http.delete<DeleteModel>(`${this.customApiUrl}${id}`);
  }
}
