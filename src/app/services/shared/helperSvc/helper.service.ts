import { ArticleModel } from "../../../models/article";
import { ApiArticleModel } from "../../../models/api-article-model";
import { ServerUpdateModel } from "../../../models/server-update-model";

export class HelperService {

  constructor() { }

  public static mapApiToArticle(apiArticle: ApiArticleModel) {
    return new ArticleModel(
      apiArticle.source.id,
      apiArticle.author,
      apiArticle.title,
      apiArticle.description,
      apiArticle.url,
      apiArticle.urlToImage,
      apiArticle.publishedAt,
      apiArticle.content
    )
  }

  public static mapArticleToServerUpdateModel(article: ArticleModel): ServerUpdateModel[] {
    const articleEntries: any = Object.entries(article);
    const serverUpdateValue: ServerUpdateModel[] = articleEntries.map((item: any[]) => {
      return new ServerUpdateModel(item[0], item[1]);
    })
    return serverUpdateValue;
  }
}
