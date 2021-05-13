import { Component, NgZone, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-seddo',
  templateUrl: './seddo.page.html',
  styleUrls: ['./seddo.page.scss'],
})
export class SeddoPage implements OnInit {
  amount: number;
  code: string;

  constructor(
    private accountService: AccountService,
    private zone: NgZone) { }

  ngOnInit() {
  }

  order(){
    this.accountService.order(this.amount, this.code, "SEDDO").subscribe(
      () => {
        console.log("Success");
        this.zone.runOutsideAngular(() => {
          window.location.href = 'starting/account';
        });
      }
    )
  }
}
