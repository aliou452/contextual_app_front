import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  src1 = "https://www.orange.sn/sites/default/files/images/contact/ibou.svg"
  constructor() { }

  ngOnInit() {
  }

}
