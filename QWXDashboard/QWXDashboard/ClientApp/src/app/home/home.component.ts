import { Component } from '@angular/core';
//declare var require: any

@Component({
  selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent {
  private img1 = require("assets/images/gui-2311261.svg");
 private img2 = require("assets/images/graph-3331249.svg");
}
