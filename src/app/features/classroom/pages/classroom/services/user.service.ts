import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public socketID: string | null = null;
  public username: string | null = null;
  public type: "viewer" | "player" | null = null;
  public isOwner: boolean = false;
  public selectedCard?: string;

  public updateUsernameAndType({ username, type }: { username: string, type: "viewer" | "player" }) {
    this.username = username
    this.type = type
  }

  public setSocketID(id: string) {
    this.socketID = id
  }

  public setSelectedCard(card: string) {
    this.selectedCard = card
  }

  constructor() { }
}
