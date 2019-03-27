import { Component, Injectable, Inject, OnInit, AfterContentInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-Login',
    templateUrl: './Login.component.html',
})
export class LoginComponent {
    
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    }

   



}
