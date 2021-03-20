import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public number: string;
  public code: string;
  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
    console.log("login")
  }

  login() {
    console.log(this.number, this.code)
    let user: User = {username: this.number, password: this.code}
    this.authService.login(user)

  }

}
