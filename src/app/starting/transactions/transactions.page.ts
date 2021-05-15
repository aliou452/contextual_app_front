import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { AccountService } from 'src/app/shared/services/account.service';
import { formatDate } from '@angular/common'

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
  id: number;
  list: Transaction[];
  segment: string = "Tout";
  segType: string = "month";

  constructor(
    public authService: AuthenticationService,
    public jwtHelper: JwtHelperService,
    public accountService: AccountService
    ) { }

  async ngOnInit() {
    await this.accountService.getAccount().subscribe(
      res =>
      this.list = res
    );
  }

  async logout() {
    console.log("Loging out")
    await this.authService.logout()
  }

  format(value: string | number | Date, format: string, locale: string, timezone?: string): string{
    return formatDate(value, format, locale, timezone);
  }

  show(date: Date, transType: string): Boolean{
    let month = ((new Date()).getMonth() == date.getMonth())
    let today = ((new Date()).getDate() == date.getDate()) && month && ((new Date()).getFullYear() == date.getFullYear())
    let yesterday = ((new Date()).getDate() == (date.getDate() + 1)) && month && ((new Date()).getFullYear() == date.getFullYear())
    month = (month && (this.segType == "month")) || this.segType == "all"
    today = today && (this.segType == "today") || this.segType == "all"
    yesterday = yesterday && (this.segType == "yesterday") || this.segType == "all"
    let seg = (this.segment == "Tout") || ((this.segment == "Sortant") && (transType=="DEPOSIT")) || ((this.segment == "Entrant") && (transType !="DEPOSIT"))

    return (month || today || yesterday) && seg;
  }


  setSegType(theSegType: string): void{
    this.segType = theSegType;
  }

}




