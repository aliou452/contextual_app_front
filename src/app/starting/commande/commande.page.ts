import { Component, NgZone, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/shared/services/transactions.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {

  amount: number;
  code: string;

  constructor(
    private transactionsService: TransactionsService,
    private zone: NgZone) { }

  ngOnInit() {
  }

  order(){
    this.transactionsService.order(this.amount, this.code).subscribe(
      () => {
        console.log("Success");
        this.zone.runOutsideAngular(() => {
          window.location.href = 'starting/transactions';
        });
      }
    )
  }
}
