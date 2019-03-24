import { Component } from '@angular/core';


@Component({
    selector: 'app-AdminTools',
    templateUrl: './AdminTools.component.html',
    styleUrls: ['./AdminTools.component.less']
})
export class AdminToolsComponent{
    connectionTypes: string[] = ['MongoDB', 'Azure SQL'];
    selectedConnection: string;

    constructor() {
        this.selectedConnection = 'MongoDB';
    }

    onItemChange(connectionType: string) {
        this.selectedConnection = connectionType;
        console.log(connectionType);
    }

 

}



