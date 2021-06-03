import { Component, OnInit} from '@angular/core';
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
  segmentTime: string = "today";

  constructor(
    public authService: AuthenticationService,
    public jwtHelper: JwtHelperService,
    public accountService: AccountService,
    ) { }

  async ngOnInit() {
    await this.accountService.getTransactions();
    this.accountService.transactionsObs.subscribe(
      res => this.list = res
    );
  }

  async doRefresh(event) {
    console.log('Begin async operation');

    await this.accountService.transactionsObs.subscribe(
      res =>
      this.list = res
    );
    event.target.complete();
  }

  async logout() {
    console.log("Logging out")
    await this.authService.logout()
  }

  format(value: string | number | Date, format: string, locale: string, timezone?: string): string{
    return formatDate(value, format, locale, timezone);
  }

  show(date: Date, amount: number): Boolean{
    let now: Date = new Date()
    let month = (now.getMonth() == date.getMonth()) && (this.segmentTime == "month")
    let today = (now.getDate() == date.getDate()) && (now.getMonth() == date.getMonth()) && (now.getFullYear() == date.getFullYear()) && (this.segmentTime == "today")
    let yesterday = (now.getDate() == (date.getDate() + 1)) && (now.getMonth() == date.getMonth()) && (now.getFullYear() == date.getFullYear()) && (this.segmentTime == "yesterday")

    let seg = (this.segment == "Tout") || ((this.segment == "Entrant") && (amount>0)) || ((this.segment == "Sortant") && (amount<0))

    return (month || today || yesterday || this.segmentTime == "all") && seg;
  }

  theDate(): string{
    return new Date().toISOString()
  }

  transType(transaction: Transaction): string{
    if(transaction.transactionType=="MONEY_WITHDRAW"){
      return "Retrait OM effectué";
    }
    if(transaction.amount>0){
      if(transaction.transactionType=="MONEY"){
        return "Commande UV effectuée"
      } else{
        return "Commande Seddo effectuée"
      }
    }

    if(transaction.transactionType=="MONEY"){
      return "Dépot OM effectué"
    }
    return "Dépot seddo effectué"
  }

}




