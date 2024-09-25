import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'molecule-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class ModalComponent {
  @Input() title?: string;
  @Input() canShow?: boolean;
  @Input() closeModal?: () => void;

  hasCloseModal() {
    return !!this.closeModal;
  }
}
