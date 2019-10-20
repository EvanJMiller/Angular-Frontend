import { Component, OnInit } from '@angular/core';
import { LinkService } from './services/link.service';
import { ArticleSectionService } from './services/article-section.service';
import { NavLink } from './nav-link';
import { ArticleSection } from './domains/article-section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private linkService: LinkService;
  private articleSectionService: ArticleSectionService;

  constructor(linkService: LinkService, articleSectionService: ArticleSectionService) {
    this.linkService = linkService;
    this.articleSectionService = articleSectionService;
  }

  ngOnInit() {
  }

  getNavLinks(): NavLink[] {
    return this.linkService.getNavLinks();
  }
  getSidebarLinks(): NavLink[] {
    return this.linkService.getSidebarLinks();
  }
  getArticleSections(): ArticleSection[] {
    return this.articleSectionService.getArticleSections();
  }
}
