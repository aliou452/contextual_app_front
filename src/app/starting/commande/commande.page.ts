import { Component, NgZone, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  amount: number;
  code: string;

  constructor(
    private accountService: AccountService,
    private zone: NgZone) { }

  ngOnInit() {
  }

  order(){
    this.accountService.order(this.amount, this.code, "MONEY").subscribe(
      () => {
        console.log("Success");
        this.zone.runOutsideAngular(() => {
          window.location.href = 'starting/account';
        });
      }
    )
  }
}
