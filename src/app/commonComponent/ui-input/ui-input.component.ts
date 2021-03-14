import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss'],
})
export class UiInputComponent implements OnInit {
  constructor() {}

  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() autoclear: boolean = false;
  @Input() autofocus: boolean = false;
  @ViewChild('currentInput') currentInput!: ElementRef;
  @Input() hasError: boolean = false;
  @Input() disabled: boolean = false;
  @Input() onSubmit: boolean = false;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.autofocus) {
      this.currentInput.nativeElement.focus();
    }
  }
}
