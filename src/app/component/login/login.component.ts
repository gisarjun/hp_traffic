import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLSearchParams } from '@angular/http';

import { HttpService } from '../../service/http.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public emailAddress;
  public pwd;
  public api_path = 'http://demo.greatinnovus.com/hp_traffic/';
  public errorThrow: any;
  public busy: Subscription;

  constructor(private route: Router, private http: HttpService) { }

  ngOnInit() {
    localStorage.removeItem('currentUser');
  }

  submitForm(form) {
    this.errorThrow = '';
    if (form.valid && form.submitted && form.value) {
      const data = new URLSearchParams();
      data.append('email', form.value.useremail);
      data.append('password', form.value.password);
      data.append('type', 'login');
      this.busy = this.http.post(this.api_path, data)
        .subscribe((result) => {
          if (result.status === 'success') {
            localStorage.setItem('currentUser', JSON.stringify(result.data));
            this.route.navigateByUrl('/dashboard');
          } else {
            this.errorThrow = result.data;
          }
        }, (error) => {
            console.log(error);
            this.errorThrow = error;
        });

    }
  }

}
