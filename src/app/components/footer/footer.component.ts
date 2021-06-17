import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  @Input() text: string;
  @Input() disabled = false;
  @Output() next: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}



}
