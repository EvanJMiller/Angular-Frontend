import { Injectable } from '@angular/core';
import { NavLink } from '../nav-link';


@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private navLinks: NavLink[] = [ 
    new NavLink("Home", '#'),
    new NavLink("Articles", '#'),
    new NavLink("Authors", '#'), 
    new NavLink("About", '#')
  ];
  private sidebarLinks: NavLink[] = [ 
    new NavLink("Intro to Python", '#'),
    new NavLink("Getting Started", '#'),
    new NavLink("Hello World", '#'), 
    new NavLink("Data Types", '#')
  ];

  constructor() { }

  getNavLinks(): NavLink[]{
    return this.navLinks;
  }
  getSidebarLinks(): NavLink[]{
    return this.sidebarLinks;
  }


}
