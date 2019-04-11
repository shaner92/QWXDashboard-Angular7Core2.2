import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/AuthService.service';

@Component({
  selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    name: any;
    private img2 = require("assets/images/graph-3331249.svg");
    private img1 = require("assets/images/gui-2311261.svg");

    constructor(private authService: AuthService) {
        this.authService.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.name = auth.displayName;
            }
        });
    }

    ngOnInit() {
    }


}
