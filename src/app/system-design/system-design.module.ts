import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './atoms/input/input.component';
import { ButtonComponent } from './atoms/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './atoms/loader/loader.component';
import { ModalComponent } from './molecules/modal/modal.component';
import { RadioInputComponent } from './atoms/radio-input/radio-input.component';
import { CardComponent } from './atoms/card/card.component';
import { AvatarComponent } from './atoms/avatar/avatar.component';
import { NgIconsModule } from '@ng-icons/core';
import { ionClose } from '@ng-icons/ionicons';


@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    LoaderComponent,
    ModalComponent,
    RadioInputComponent,
    CardComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ionClose})
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    ModalComponent,
    RadioInputComponent,
    CardComponent,
    AvatarComponent
  ]
})
export class SystemDesignModule { }
