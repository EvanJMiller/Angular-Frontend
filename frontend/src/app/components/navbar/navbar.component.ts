import { Component, OnInit, Input } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';
import { NavLink } from 'src/app/nav-link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  @Input() navLinks: NavLink[];
  
  constructor(linkService: LinkService) {
   }

  ngOnInit() {
    this.navLinks.forEach((link) => console.log(link) );
  }

}
