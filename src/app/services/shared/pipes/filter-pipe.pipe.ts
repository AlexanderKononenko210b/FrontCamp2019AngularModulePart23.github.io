import { Pipe, PipeTransform } from '@angular/core';
import { ArticleModel } from "../../../models/article";

@Pipe({
    name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

    transform(value: ArticleModel[], filter: string): any {
        if(filter && value){
            return value.filter((article) => {
                return article.title.indexOf(filter) !== -1;
            });
        }

        return value;
    }
}