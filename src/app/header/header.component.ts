import { Menu, HeaderService } from './../services/header.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menus$: Observable<Menu[]>;

  constructor(private service: HeaderService) { }

  ngOnInit() {
    this.menus$ = this.service.getMenus();
  }

}
