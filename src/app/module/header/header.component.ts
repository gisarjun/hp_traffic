import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit() { }

  // Logout's when there is no Current User Name in the localStorage
  logout() {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
  }
}
