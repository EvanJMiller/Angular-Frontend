import { Component, OnInit, Input } from '@angular/core';
import { NavLink } from 'src/app/nav-link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sidebarLinks: NavLink[];
  constructor() { }

  ngOnInit() {
    this.sidebarLinks.forEach(link => console.log(link.getDestination() + ':' + link.getLink()));
  }

}
