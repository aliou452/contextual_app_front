import { Component, NgZone, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/shared/services/transactions.service';

@Component({
  selector: 'app-seddo',
  templateUrl: './seddo.page.html',
  styleUrls: ['./seddo.page.scss'],
})
export class SeddoPage implements OnInit {
  amount: number;
  code: string;

  constructor(
    private transactionsService: TransactionsService,
    private zone: NgZone) { }

  ngOnInit() {
  }

  order(){
    this.transactionsService.order(this.amount, this.code, "SEDDO").subscribe(
      () => {
        console.log("Success");
        this.zone.runOutsideAngular(() => {
          window.location.href = 'starting/transactions';
        });
      }
    )
  }
}
