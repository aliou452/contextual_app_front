import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Account } from 'src/app/shared/models/account.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  firstName: string;
  lastName: string;
  number: string;
  pocket: number;
  list: any[] = [];
  id: number;
  data: Account[];

  constructor(
    public authService: AuthenticationService,
    public jwtHelper: JwtHelperService,
    public accountService: AccountService
    ) { }

  async ngOnInit() {
    await this.authService.getUser().subscribe(
      res => {
        console.log("Response:")
        console.log(JSON.parse(JSON.stringify(res))["firstName"])
        this.firstName = JSON.parse(JSON.stringify(res))["firstName"]
        this.lastName = JSON.parse(JSON.stringify(res))["lastName"]
        this.number = JSON.parse(JSON.stringify(res))["number"]
        this.pocket = JSON.parse(JSON.stringify(res))["pocket"],
        this.id = JSON.parse(JSON.stringify(res))["id"]
        console.log(this.id)
      }
    )
    await this.getAccount();

  }

  async getAccount(){
    await this.accountService.getAccount().subscribe(
      res =>
      this.list = res
    );
  }

  async logout() {
    console.log("Loging out")
    await this.authService.logout()
  }

}




