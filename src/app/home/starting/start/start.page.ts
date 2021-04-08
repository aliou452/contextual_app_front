import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Transactions } from 'src/app/shared/models/transactions.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { TransactionsService } from 'src/app/shared/services/transactions.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  firstName: string;
  lastName: string;
  number: string;
  pocket: number;
  list: any[] = [];
  id: number;
  data: Transactions[];

  constructor(
    public authService: AuthenticationService,
    public jwtHelper: JwtHelperService,
    public transactionsService: TransactionsService
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
    await this.getTransactions();

  }

  async getTransactions(){
    await this.transactionsService.getTransaction(2).subscribe(
      res =>
      this.list = res
    );
  }

  async logout() {
    console.log("Loging out")
    await this.authService.logout()
  }

}




