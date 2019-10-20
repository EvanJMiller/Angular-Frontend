import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';
import { NavLink } from 'src/app/nav-link';
import { ArticleSectionService } from 'src/app/services/article-section.service';
import { ArticleSection } from 'src/app/domains/article-section';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
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
