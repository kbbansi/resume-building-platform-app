import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // begin login function
  LoginForm: any = FormGroup;
  dataBucket: any = {};
  
  constructor(private router: Router, private formBuilder: FormBuilder, private auth: AuthService) {
    this.createLoginForm();
  }

  ngOnInit(): void {
  }

  goBack() {
    console.log(this.router.getCurrentNavigation());
  }

  login() {
    this.dataBucket = {};
    // console.log(this.LoginForm.value);
    this.auth.login(this.LoginForm.value).subscribe(response => {
      this.dataBucket = response;
      console.log(this.dataBucket.status);
      if (this.dataBucket.status === 200) {
        alert('Login Success');
        console.log(response);
        console.log(this.dataBucket.data);

        this.setSessionVariables(this.dataBucket.data);
        console.log(sessionStorage.getItem('id'));
        console.log(sessionStorage.getItem('email'));
        console.log(sessionStorage.getItem('userName'));
        console.log(sessionStorage.getItem('resume'));

        this.router.navigate(['application/app/user'])
      }
    });
  }

  // login form init
  createLoginForm() {
    this.LoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // set user session
  setSessionVariables(d: any) {
    sessionStorage.setItem('id', d._id);
    sessionStorage.setItem('email', d.email);
    sessionStorage.setItem('accountType', d.accountType);
    sessionStorage.setItem('coverLetter', d.coverLetter);
    sessionStorage.setItem('resume', d.resume);
    sessionStorage.setItem('firstName', d.firstName);
    sessionStorage.setItem('lastName', d.lastName);
    sessionStorage.setItem('otherNames', d.otherNames);
    sessionStorage.setItem('userName', d.firstName + ' ' + d.lastName);
  }
}
