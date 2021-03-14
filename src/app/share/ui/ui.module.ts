import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputComponent } from 'src/app/commonComponent/ui-input/ui-input.component';
import { MaterialModule } from '../material.module';
import { UiRadioButtonComponent } from 'src/app/commonComponent/ui-radio-button/ui-radio-button.component';
import { UiButtonComponent } from 'src/app/commonComponent/ui-button/ui-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UiInputComponent, UiRadioButtonComponent, UiButtonComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [UiInputComponent, UiRadioButtonComponent, UiButtonComponent],
})
export class UiModule {}
