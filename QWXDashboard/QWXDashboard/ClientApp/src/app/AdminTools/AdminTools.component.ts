import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-AdminTools',
    templateUrl: './AdminTools.component.html',
    styleUrls: ['./AdminTools.component.less']
})
export class AdminToolsComponent{

    connectionTypes: string[] = ['MongoDB', 'Azure SQL'];
    selectedConnection: string;
    http: HttpClient;
    baseUrl: string;
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.http.get(baseUrl + 'api/AppConfig/GetConnectionType', { responseType: 'text' } ).subscribe
            (data => {
                this.selectedConnection = data;
                console.log(this.selectedConnection);
           }, error => console.error(error));
    }

    onItemChange(connectionType: string) {
        this.selectedConnection = connectionType;
       this.http.post(this.baseUrl + 'api/AppConfig/SetConnectionType', this.selectedConnection).subscribe
            (data => {
               const response = data;
            });
        //console.log(connectionType);
    }

 

}



