import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../actions/login-page.actions';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(username: string, password: string) {
   // Store.dispatch(login({username: username, password: password}));
  }

}
