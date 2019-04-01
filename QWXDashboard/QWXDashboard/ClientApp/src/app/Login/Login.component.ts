import { Component, Injectable, Inject, OnInit, AfterContentInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../Services/AuthService.service';

@Component({
    selector: 'app-Login',
    templateUrl: './Login.component.html',
})
export class LoginComponent implements OnInit {
    
    constructor(private authService: AuthService) {

    }

    ngOnInit() {}

   



}
