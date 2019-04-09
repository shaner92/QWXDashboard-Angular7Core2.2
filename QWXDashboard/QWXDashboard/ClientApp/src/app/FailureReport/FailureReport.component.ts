import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, Inject, OnInit, AfterContentInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
    selector: 'app-FailureReport',
    templateUrl: './FailureReport.component.html'
})
export class FailureReportComponent implements OnInit {
    private http: HttpClient;
    private baseUrl: string;
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
    }


    ngOnInit() {
    }

   

    public PostData() {
        //const retVal = this.http.post(this.baseUrl + 'api/PartHistory/Post', { SN: SerialNum }).subscribe
        //    (data => {
        //        this.toLoad = true;
        //        this.SN = data;
        //        this.database = new FileDatabase(JSON.stringify(this.SN));
        //        this.loadTree();
        //    });

    }


    public loadTable() {

    }

}
