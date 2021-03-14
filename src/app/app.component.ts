import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  placeholder = 'input text';
  value1 = '';
  value2 = 'Text that User is entering';
  value3 = 'Text entered, the input field is completed';
  value4 = 'Text entered, the input field is complet';
  value5 = 'Text that User is entering';
  value6 = '';
  label = 'Input Label';
  titleYes = 'Yes';
  titleNo = 'No';
  titleInputText = 'Radioinput Text';
  name1 = 'name1';
  name2 = 'name2';
  name3 = 'name3';
  name4 = 'name4';
  onSubmit = false;

  clickNext(event: any) {
    event.preventDefault();
    this.onSubmit = true;
  }
}
