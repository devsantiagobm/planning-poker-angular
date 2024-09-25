import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SocketsService } from '../../services/sockets.service';

@Component({
  selector: 'classroom-poker-footer',
  templateUrl: './poker-footer.component.html',
  styleUrl: './poker-footer.component.scss'
})
export class PokerFooterComponent {
  public fibonnaciCards = ["0", "1", "3", "5", "8", "13", "21", "34", "55", "89", "❓", "☕"];
  constructor(private userService: UserService, private socketService: SocketsService) { }


  get canVote() {
    return this.userService.type === "player"
  }

  get results(){
    return this.socketService.result
  }

  get selectedCard() {
    return this.userService.selectedCard
  }

  setSelectedCard(card: string) {
    this.userService.setSelectedCard(card)
    this.socketService.vote({ card })
  }
}
