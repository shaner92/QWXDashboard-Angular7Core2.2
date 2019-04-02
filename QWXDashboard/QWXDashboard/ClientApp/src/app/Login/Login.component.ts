import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/AuthService.service';

@Component({
    selector: 'app-Login',
    templateUrl: './Login.component.html'
    //,
    //styleUrls: ['./Login.component.css']
})

export class LoginComponent implements OnInit {
    
    constructor(private authService: AuthService) {

    }

    ngOnInit() {}

   



}
