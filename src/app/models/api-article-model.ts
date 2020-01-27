import { SourceModel } from "./source-model";

export class ApiArticleModel {
    constructor(
        public source: SourceModel,
        public author: string,
        public title: string,
        public description: string,
        public url: string,
        public urlToImage: string,
        public publishedAt: string,
        public content: string
    ) {}
}