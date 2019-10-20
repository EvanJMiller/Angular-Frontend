import { Article } from './article';

export class ArticleSection {

    private sectionHeader: String;
    private articles: Article[];

    constructor(sectionHeader: String, articles: Article[]){
        this.sectionHeader = sectionHeader;
        this.articles = articles;
    }

    getSectionHeader(): String {
        return this.sectionHeader;
    }
    getArticles(): Article[]{
        return this.articles;
    }

}
