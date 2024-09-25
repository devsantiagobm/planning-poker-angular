import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ModalService } from '../../services/modal.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';


@Component({
  selector: 'classroom-invite-players',
  templateUrl: './invite-players.component.html',
  styleUrl: './invite-players.component.scss',
  animations: [
    trigger('modal', [
      transition(':enter', [
        style({
          transform: 'translateY(8px) translateX(0px)',
          opacity: 0,
        }),
        animate('300ms ease-out', style({
          transform: 'translateY(0)',
          opacity: 1,
        }))
      ]),

      transition(':leave', [
        animate('300ms ease', style({
          transform: 'translateX(64px)',
          opacity: 0,
        }))
      ])
    ]),
  ]
})
export class InvitePlayersComponent implements OnInit {
  constructor(private modalService: ModalService, private router: Router) { }
  protected readonly toast = toast

  public url = new FormControl("");

  ngOnInit(): void {
    this.url.setValue(window.location.href)
  }

  get canShowModal() {
    return this.modalService.modal === "invite-players"
  }

  public copyURL() {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copiado al portapapeles correctamente")
  }


  public close() {
    this.modalService.closeModal()
  }

}
