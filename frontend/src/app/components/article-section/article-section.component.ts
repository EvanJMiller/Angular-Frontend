import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/domains/article';
import { ArticleSection } from 'src/app/domains/article-section';

@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.scss']
})
export class ArticleSectionComponent implements OnInit {

  @Input() articleSection: ArticleSection;

  constructor() { }

  ngOnInit() {
  }

}
