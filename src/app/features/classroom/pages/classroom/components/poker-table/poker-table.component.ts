import { Component } from '@angular/core';
import { SocketsService } from '../../services/sockets.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Player } from '../../types.interface';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'classroom-poker-table',
    templateUrl: './poker-table.component.html',
    styleUrl: './poker-table.component.scss',
    animations: [
        trigger("card", [
            transition(":enter", [
                style({
                    opacity: 0
                }),
                animate("300ms ease", style({
                    opacity: 1
                }))
            ]),
            transition(":leave", [
                animate("300ms ease", style({
                    opacity: 0
                }))
            ]),
        ])
    ]
})
export class PokerTableComponent {
    constructor(private socketsService: SocketsService, private userService: UserService) { }


    get players() {
        return [...this.socketsService.players].sort((one, two) => {
            if (one.socketID === this.userService.socketID) return -1;
            else if (two.socketID === this.userService.socketID) return 1;
            return 0;
        });
    }

    public userIsOwner(player: Player) {
        return Boolean(this.socketsService.classroom?.owners.includes(player.socketID))
    }

    get canShowRevealCards() {
        const playersType = this.socketsService.players.filter(({ type }) => type === "player")
        return playersType.every(({ vote }) => Boolean(vote)) && playersType.length > 0 && !this.socketsService.result && this.userService.isOwner
    }

    get canShowResetCards() {
        return Boolean(this.socketsService.result) && this.userService.isOwner
    }

    get results() {
        return this.socketsService.result;
    }

    public trackByID(_: number, player: Player) {
        return player._id;
    }

    public revealCards() {
        this.socketsService.revealCards()
    }

    public resetCards() {
        this.socketsService.resetCards()
    }
}
