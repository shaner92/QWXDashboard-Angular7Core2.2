import { Component, Injectable, Inject, OnInit, AfterContentInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/AuthService.service';
import { Router } from '@angular/router'

@Component({
    selector: 'app-Registration',
    templateUrl: './Registration.component.html',
})
export class RegistrationComponent {
    authService: AuthService;
    router: Router;
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.authService.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.router.navigate(['Home']);
            }
        });
    }

   



}
