import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Subject, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-policedetails',
  templateUrl: './policedetails.component.html',
  styleUrls: ['./policedetails.component.css']
})
export class PolicedetailsComponent implements OnInit {

  public config: any;
  public policeList: any = [];
  public dtTrigger: Subject<any> = new Subject();
  public busy: Subscription;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.busy = this.http.getJSON()
      .subscribe((result) => {
        this.config  = result;
        this.getPoliceList();
      }, (error) => {
        console.error(error);
      });
  }

  getPoliceList() {
    const sentQuery: any = new Object();
    sentQuery.type = 'policeList';
    this.busy = this.http.get(this.config.api_path, sentQuery)
      .subscribe((result) => {
        if (result.status && Array.isArray(result.data)) {
          this.policeList = result.data;
          this.dtTrigger.next();
        } else {
          this.policeList = [];
          this.dtTrigger.next();
          console.log('No data Found');
        }
      }, (error) => {
        console.error(error);
      });
  }

}
