import { ApiArticleModel } from "./api-article-model";
export class ApiModel {
    constructor(
        public status: string,
        public totalResults: string,
        public articles: ApiArticleModel[]
    ) {}
}