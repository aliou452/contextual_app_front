import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrls: ['./modal-base.component.scss'],
})
export class ModalBaseComponent implements OnInit {

  @ViewChild('mySubNav', {static: true}) myNav: IonNav;
  rootPage: any;
  @Input() orderType: string;

  constructor() { }

  ngOnInit() {
    this.myNav.setRoot(this.rootPage, {data: this.orderType});
    console.log("modal-base", this.myNav.canGoBack)
  }

}
