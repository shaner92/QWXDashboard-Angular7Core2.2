import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-PartHistory-component',
  templateUrl: './PartHistory.component.html'
})
export class PartHistoryComponent {
  public data: parthistory[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<parthistory[]>(baseUrl + 'api/PartHistory/data').subscribe(result => {
      this.data = result;
    }, error => console.error(error));
  }
  
}
interface parthistory {
  serialNumber: string;
}
