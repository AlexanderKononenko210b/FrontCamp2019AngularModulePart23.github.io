export class ArticleModel {
    constructor(
        public id: string,
        public title: string,
        public content: string,
        public author: string,
        public description: string,
        public url: string,
        public urlToImage: string,
        public publishedAt: string
    ) { }
}