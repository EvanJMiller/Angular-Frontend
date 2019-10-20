import { Component, OnInit, Input } from '@angular/core';
import { NavLink } from 'src/app/nav-link';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.scss']
})

export class NavitemComponent implements OnInit {
  
  @Input() navLink: NavLink;

  constructor() {}

  ngOnInit() {
    console.log(this.navLink);
  }

}
