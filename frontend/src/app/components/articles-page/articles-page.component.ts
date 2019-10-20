import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/domains/article';
import { ArticleSection } from 'src/app/domains/article-section';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {

  @Input() articleSections: ArticleSection[];
  constructor() { }

  ngOnInit() {
  }

  getArticleSections(): ArticleSection[]{
    return this.articleSections;
  }

}
