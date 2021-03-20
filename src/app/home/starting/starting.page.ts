import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MenuController } from '@ionic/angular';
import { AuthResponse } from 'src/app/shared/models/auth-response';
import { User } from 'src/app/shared/models/user';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.page.html',
  styleUrls: ['./starting.page.scss'],
})
export class StartingPage implements OnInit {

  firstName: string;
  lastName: string;
  number: string;

  constructor(
    public authService: AuthenticationService,
    public jwtHelper: JwtHelperService) { }

  async ngOnInit() {
    await this.authService.getUser().subscribe(
      res => {
        console.log("Response:")
        console.log(JSON.parse(JSON.stringify(res))["firstName"])
        this.firstName = JSON.parse(JSON.stringify(res))["firstName"]
        this.lastName = JSON.parse(JSON.stringify(res))["lastName"]
        this.number = JSON.parse(JSON.stringify(res))["number"]
        console.log(this.number)
      }
    )
  }


  async logout() {
    console.log("Loging out")
    await this.authService.logout()

  }

}
