import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-facture-detail',
  templateUrl: './facture-detail.component.html',
  styleUrls: ['./facture-detail.component.scss'],
})
export class FactureDetailComponent implements OnInit {

  @Input() amount: number;
  @Input() date: string = "07 juillet 2021";
  @Input() is_clicked = false;
  @Output() clickEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {}

  onClick() {
    this.is_clicked = !this.is_clicked;
    this.clickEvent.emit(this.is_clicked);
  }

}
