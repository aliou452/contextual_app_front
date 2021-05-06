import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.page.html',
  styleUrls: ['./starting.page.scss'],
})
export class StartingPage implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  async logout() {
    console.log("Loging out")
    await this.authService.logout()
  }
}
