import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/AuthService.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-Login',
    templateUrl: './Login.component.html',
    styleUrls: ['./Login.component.less']
})

export class LoginComponent implements OnInit {
    
    constructor(private authService: AuthService, private router: Router) {
        this.authService.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.router.navigate(['Home']);
            }
        });
    }
    ngOnInit() {}

    email = new FormControl('', [Validators.required, Validators.email]);

    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }



}
