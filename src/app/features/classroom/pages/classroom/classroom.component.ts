import { Component } from '@angular/core';
import { SocketsService } from './sockets.service';

@Component({
  selector: 'classroom-classroom',
  templateUrl: './classroom.component.html',
  styleUrl: './classroom.component.scss'
})
export class ClassroomComponent {
  constructor(private socketService: SocketsService){}
}
