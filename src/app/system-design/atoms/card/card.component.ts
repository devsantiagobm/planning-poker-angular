import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() customWidth?: string = "";
  @Input() customClass?: string = "";
  @Input() isActive?: boolean;
  @Input() interactivity?: "background" | "go-up";
}
