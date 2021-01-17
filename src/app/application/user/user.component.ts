import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: any;
  id: any;
  resume: any;
  firstName: any;
  lastName: any;
  otherNames: any;
  email: any;
  accountType: any;

  constructor() {
    this.userName = sessionStorage.getItem('userName');
    this.id = sessionStorage.getItem('id');
    this.resume = sessionStorage.getItem('resume');
    this.firstName = sessionStorage.getItem('email')
    this.lastName = sessionStorage.getItem('accountType')
    this.otherNames = sessionStorage.getItem('firstName')
    this.email = sessionStorage.getItem('lastName')
    this.accountType = sessionStorage.getItem('otherNames')
  }

  ngOnInit(): void {
  }

  accountOptions() {
    console.log("Hello World");
    // document.getElementById('account').classList.toggle("show");
  }

}
