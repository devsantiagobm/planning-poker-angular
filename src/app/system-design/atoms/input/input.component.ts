import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'atom-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  animations: [
    trigger("error-message", [
      transition(":enter", [
        style({
          opacity: 0,
          height: 0,
        }),
        animate("250ms ease", style({
          opacity: 1,
          height: 19,
        }))
      ]),
      transition(":leave", [
        animate("200ms ease", style({
          opacity: 0,
          height: 0
        }))
      ]),
    ])
  ]
})
export class InputComponent {
  @Input() containerClass?: string = "";
  @Input() id: string = "";
  @Input() control = new FormControl();
  @Input() error: string | null = "";
  @Input() label: string = "";
  @Input() readonly?: boolean;
}
