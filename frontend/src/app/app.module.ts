import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavitemComponent } from './components/navitem/navitem.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageComponent } from './components/page/page.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleSectionComponent } from './components/article-section/article-section.component';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavitemComponent,
    SidebarComponent,
    PageComponent,
    ArticleCardComponent,
    ArticleSectionComponent,
    ArticlesPageComponent,
    ArticlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
