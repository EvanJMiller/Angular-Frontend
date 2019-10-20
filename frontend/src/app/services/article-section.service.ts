import { Injectable } from '@angular/core';
import { ArticleSection } from '../domains/article-section';
import { Article } from '../domains/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleSectionService {

  constructor() { }

  getArticleSections(): ArticleSection[]{
    let sectionHeader = "New Articles";
    let subtitle = "Lorem ipsum dolor sit amet, est te erat recteque sententiae. Vis ea possit quodsi, usu in scripta intellegam. Ex mei nonumy detracto intellegebat."
    let articles = [
      new Article("Hello World", subtitle, new Date(), "body"), 
      new Article("Python for Beginners", subtitle, new Date(), "body"),
      new Article("Scheme", subtitle, new Date(), "body"),
      new Article("Python for Beginners", subtitle, new Date(), "body"),
      new Article("Scheme", subtitle, new Date(), "body"),

    ];
    return [  
      new ArticleSection(sectionHeader, articles), 
      new ArticleSection("Learn to Code", articles),
      new ArticleSection("Tech Reviews", articles)
    ]
  }
}
