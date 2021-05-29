import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  amount: number;
  receiver: string;
  transtype: string;

  constructor() { }

  ngOnInit() {
  }

}
