import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Subject, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public config: any;
  public vehiclesList: any = [];
  public dtTrigger: Subject<any> = new Subject();
  public busy: Subscription;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.busy = this.http.getJSON()
      .subscribe((result) => {
        this.config = result;
        this.getLicenseList();
      }, (error) => {
        console.error(error);
      });
  }

  getLicenseList() {
    const sentQuery: any = new Object();
    sentQuery.type = 'vehicleList';
    this.busy = this.http.get(this.config.api_path, sentQuery)
      .subscribe((result) => {
        if (result.status && Array.isArray(result.data)) {
          this.vehiclesList = result.data;
          this.dtTrigger.next();
        } else {
          this.vehiclesList = [];
          this.dtTrigger.next();
          console.log('No data Found');
        }
      }, (error) => {
        console.error(error);
      });
  }

  dateConversion(date) {
    return new Date(date).toDateString();
  }

}
