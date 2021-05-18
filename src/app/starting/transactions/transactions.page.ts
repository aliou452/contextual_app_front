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
  day: string = "today";
  customMonthShortNames: string = "janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre"

  constructor(
    public authService: AuthenticationService,
    public jwtHelper: JwtHelperService,
    public accountService: AccountService,
    ) { }

  async ngOnInit() {
    await this.accountService.getAccount().subscribe(
      res =>
      this.list = res
    );
  }

  async logout() {
    console.log("Logging out")
    await this.authService.logout()
  }

  format(value: string | number | Date, format: string, locale: string, timezone?: string): string{
    return formatDate(value, format, locale, timezone);
  }

  show(date: Date, transType: string): Boolean{
    let month = ((new Date()).getMonth() == date.getMonth())
    let today = ((new Date()).getDate() == date.getDate()) && month && ((new Date()).getFullYear() == date.getFullYear())
    let yesterday = ((new Date()).getDate() == (date.getDate() + 1)) && month && ((new Date()).getFullYear() == date.getFullYear())
    month = (month && (this.day == "month")) || this.day == "all"
    today = today && (this.day == "today") || this.day == "all"
    yesterday = yesterday && (this.day == "yesterday") || this.day == "all"
    let seg = (this.segment == "Tout") || ((this.segment == "Entrant") && (transType=="DEPOSIT")) || ((this.segment == "Sortant") && (transType !="DEPOSIT"))

    return (month || today || yesterday) && seg;
  }

  theDate(): string{
    return new Date().toISOString()
  }

}




