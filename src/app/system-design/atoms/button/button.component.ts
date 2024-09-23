import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() variant: "first" | "second" | "third" = "first";
  @Input() isDisabled: boolean = false;
  @Input() isLoading: boolean = false;
}
