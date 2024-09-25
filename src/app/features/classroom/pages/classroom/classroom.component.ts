import { Component, OnInit } from '@angular/core';
import { SocketsService } from './services/sockets.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service';
import { Modals } from './types.interface';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'classroom-classroom',
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.scss'
})
export class ClassroomComponent implements OnInit {

  constructor(private socketService: SocketsService, private route: ActivatedRoute, private userService: UserService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      localStorage.setItem("x-classroom-id", params["id"])
    })
  }

  public openModal(type: Modals){
    this.modalService.setModal(type)
  }

  get username() {
    return this.userService.username;
  }

  get id() {
    return this.userService.socketID
  }

  get players() {
    return this.socketService.players
  }
}
