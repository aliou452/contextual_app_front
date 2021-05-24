import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { User } from 'src/app/shared/models/user';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public number: string;
  public code: string;
  constructor(
    public authService: AuthenticationService,
    public loaderService: LoaderService
    ) { }

  ngOnInit() {
    console.log("login")
    this.number = localStorage.getItem("phoneNumber")
  }

  async login() {
    this.loaderService.showLoader().then(() => {
      let user: User = new User({username: this.number, password: this.code});
      this.authService.login(user).subscribe(_ => {
        console.log("Logged in");
        this.loaderService.stopLoader()
      });
    })
  }

}
