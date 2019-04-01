import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";

import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './Registration/Registration.component';
import { LoginComponent } from './Login/Login.component';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PartHistoryComponent } from './PartHistory/PartHistory.component';
import { TrendBrowserComponent } from './trend-browser/trend-browser.component';
import { FooterComponent } from './footer/footer.component';
import { AdminToolsComponent } from './AdminTools/AdminTools.component';

var config = {
    apiKey: "AIzaSyAW_dYLyqzo45nsqTZkvq29JA6Mh_2GHIE",
    authDomain: "qualitydashboard-65246.firebaseapp.com",
    databaseURL: "https://qualitydashboard-65246.firebaseio.com",
    projectId: "qualitydashboard-65246",
    storageBucket: "qualitydashboard-65246.appspot.com",
    messagingSenderId: "162522009619"
};

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        RegistrationComponent,
        LoginComponent,
        HomeComponent,
        PartHistoryComponent,
        TrendBrowserComponent,
        AdminToolsComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: LoginComponent , pathMatch: 'full' },
            { path: 'Registration', component: RegistrationComponent },
            { path: 'Home', component: HomeComponent},
            { path: 'PartHistory', component: PartHistoryComponent },
            { path: 'trend-browser', component: TrendBrowserComponent },
            {path: 'AdminTools', component: AdminToolsComponent}
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }