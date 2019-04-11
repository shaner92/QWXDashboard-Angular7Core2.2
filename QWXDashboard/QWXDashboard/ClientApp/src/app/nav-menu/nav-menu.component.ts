import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/AuthService.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  isExpanded = false;
    constructor(private authService: AuthService) {

    }

    ngOnInit() { }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
