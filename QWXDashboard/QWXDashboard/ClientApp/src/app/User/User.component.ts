import { Component, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-User',
    templateUrl: './User.component.html',
})
export class UserComponent {
    
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    }

   



}
