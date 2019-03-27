import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UserComponent } from './User/User.component';
import { RegistrationComponent } from './User/Registration/Registration.component';
import { LoginComponent } from './User/Login/Login.component';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PartHistoryComponent } from './PartHistory/PartHistory.component';
import { TrendBrowserComponent } from './trend-browser/trend-browser.component';
import { FooterComponent } from './footer/footer.component';
import { AdminToolsComponent } from './AdminTools/AdminTools.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        UserComponent,
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
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/User/Registration', pathMatch: 'full' },
            {
                path: 'User', component: UserComponent,
                children: [
                    { path: 'Registration', component: RegistrationComponent },
                    { path: 'Login', component: LoginComponent }
                ]
            },
               
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