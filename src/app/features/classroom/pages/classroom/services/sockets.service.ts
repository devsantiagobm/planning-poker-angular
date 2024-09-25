import { environment } from '@/environments/environment';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Classroom, ClassroomAndPlayersResponse, Player, RevealCardsResponse } from '../types.interface';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class SocketsService extends Socket {
    public players: Player[] = []
    public result?: RevealCardsResponse;
    public classroom?: Classroom;

    constructor(private userService: UserService) {
        super({ url: environment.SERVER_URL });

        this.listenEvents();
    }

    private listenEvents() {
        this.ioSocket.on('connect', () => {
            this.userService.setSocketID(this.ioSocket.id);
        });
    
        this.on("join-classroom", (res: ClassroomAndPlayersResponse) => {
            this.players = res.players;
            this.classroom = res.classroom;
            this.checkIfUserIsOwner();
        });
    
        this.on("player-disconnected", (res: ClassroomAndPlayersResponse) => {
            this.players = res.players;
            this.classroom = res.classroom;
            this.checkIfUserIsOwner();
        });
    
        this.on("update-classroom", (res: { players: Player[] }) => {
            this.players = res.players;
            this.checkIfUserIsOwner();
        });

        this.on("reset-classroom", (res: { players: Player[] }) => {
            this.players = res.players;
            this.result = undefined;
            this.userService.selectedCard = undefined;
            
            this.checkIfUserIsOwner();
        });
    
        this.on("reveal-cards", (res: RevealCardsResponse) => {
            this.result = res;
        });
    }
    
    private checkIfUserIsOwner() {
        if (this.classroom && this.classroom.owners) {
            const isOwner = this.classroom.owners.includes(this.userService.socketID ?? "");
            this.userService.isOwner = isOwner;
        }
    }
    

    public joinClassroom({ username, type }: { username: string | null, type: string }) {
        const roomID = localStorage.getItem("x-classroom-id")
        this.emit("join-classroom", { username, type, roomID })
    }

    public vote({ card }: { card: string }) {
        this.emit("vote", { card })
    }

    public revealCards() {
        this.emit("reveal-cards")
    }

    public resetCards() {
        this.emit("reset-classroom")
    }
}

