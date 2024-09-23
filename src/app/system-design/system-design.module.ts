import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './atoms/input/input.component';
import { ButtonComponent } from './atoms/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './atoms/loader/loader.component';
import { ModalComponent } from './molecules/modal/modal.component';
import { RadioInputComponent } from './atoms/radio-input/radio-input.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    LoaderComponent,
    ModalComponent,
    RadioInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    ModalComponent,
    RadioInputComponent
  ]
})
export class SystemDesignModule { }
