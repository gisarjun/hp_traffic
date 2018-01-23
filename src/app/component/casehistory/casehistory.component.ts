import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { HttpService } from '../../service/http.service';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-casehistory',
  templateUrl: './casehistory.component.html',
  styleUrls: ['./casehistory.component.css']
})
export class CasehistoryComponent implements OnInit, OnDestroy {

  public policeId: any;
  public config: any;
  public unsubscribePoliceParams: Subscription;
  public policeCaseList: any = [];
  public dtTrigger: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.unsubscribePoliceParams  = this.route.params.subscribe(params => {
      this.policeId = params['police_id'];
      if (this.policeId) {
        this.http.getJSON()
          .subscribe((result) => {
            this.config = result;
            this.getPoliceCaseList();
          }, (error) => {
            console.error(error);
          });
      }
    });
  }

  getPoliceCaseList() {
    const sentQuery: any = new Object();
    sentQuery.type = 'caseList';
    sentQuery.police_id = this.policeId;
    this.http.get(this.config.api_path, sentQuery)
      .subscribe((result) => {
        if (result.status && Array.isArray(result.data)) {
          this.policeCaseList = result.data;
          this.dtTrigger.next();
        } else {
          this.policeCaseList = [];
          this.dtTrigger.next();
          console.log('No data Found');
        }
      }, (error) => {
        console.error(error);
      });
  }

  ngOnDestroy() {
    this.unsubscribePoliceParams.unsubscribe();
  }

}
