import { Component, Input } from '@angular/core';
import { RadioInput } from './radio-input.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'atom-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrl: './radio-input.component.scss'
})
export class RadioInputComponent {
  @Input() options: RadioInput[] = [];
  @Input() control = new FormControl();
}
