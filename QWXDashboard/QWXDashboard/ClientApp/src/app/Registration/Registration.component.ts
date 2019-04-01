import { Component, Injectable, Inject, OnInit, AfterContentInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-Registration',
    templateUrl: './Registration.component.html',
})
export class RegistrationComponent {
    
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    }

   



}
