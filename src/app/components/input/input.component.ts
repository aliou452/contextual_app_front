import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Input() input: string;
  @Input() placeholder: string;
  @Input() maxLength: number;
  @Input() size: number = 8;
  @Output() contractEvent = new EventEmitter<string>();
  contract: string

  constructor() { }

  ngOnInit() {}

  onKey(event: KeyboardEvent) {
    let value: string = (event.target as HTMLInputElement).value;
    this.contractEvent.emit(value)
  }

}
