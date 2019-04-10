import { Component, Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface FailData {
    serialnumber: string;
    status: string;
    datetime: string;
}

@Component({
    selector: 'app-FailureReport',
    templateUrl: './FailureReport.component.html',
    styleUrls: ['./FailureReport.component.less']
})
export class FailureReportComponent implements OnInit {
    private http: HttpClient;
    private baseUrl: string;
    isDataLoaded: boolean = false;
    displayedColumns: string[] = ['serialnumber', 'status','datetime'];
    dataSource: FailData[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.dataSource = [];
        this.loadData();
       
    }


    ngOnInit() {
    }


    loadData() {
        return this.http.post(this.baseUrl + 'api/FailureReport/Post', "123456").subscribe
            (data => {
                for (let key in data) {
                    let dataPoint = {
                        serialnumber: data[key]["Serial Number"],
                        status: data[key]["Part Status"],
                        datetime: data[key]["DateTime"]
                    };
                    this.dataSource.push(dataPoint);
                    //data[key]["Serial Number"];
                }
                console.log(this.dataSource);
                this.isDataLoaded = true;
            });
       
    }

}
