import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-userlicense',
  templateUrl: './userlicense.component.html',
  styleUrls: ['./userlicense.component.css']
})
export class UserlicenseComponent implements OnInit {

  public config: any;
  public userLicenseList: any = [];
  public dtTrigger: Subject<any> = new Subject();

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getJSON()
      .subscribe((result) => {
        this.config = result;
        this.getLicenseList();
      }, (error) => {
        console.error(error);
      });
  }

  getLicenseList() {
    const sentQuery: any = new Object();
    sentQuery.type = 'licenseUserList';
    this.http.get(this.config.api_path, sentQuery)
      .subscribe((result) => {
        if (result.status && Array.isArray(result.data)) {
          this.userLicenseList = result.data;
          this.dtTrigger.next();
        } else {
          this.userLicenseList = [];
          this.dtTrigger.next();
          console.log('No data Found');
        }
      }, (error) => {
        console.error(error);
      });
  }

}
