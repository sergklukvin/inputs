import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-radio-button',
  templateUrl: './ui-radio-button.component.html',
  styleUrls: ['./ui-radio-button.component.scss'],
})
export class UiRadioButtonComponent implements OnInit {
  constructor() {}

  @Input() title: string = '';
  @Input() name: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;

  ngOnInit(): void {}
}
