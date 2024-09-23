import { environment } from '@/environments/environment';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
    providedIn: 'root'
})
export class SocketsService extends Socket {

    constructor() {
        super({
            url: environment.SERVER_URL
        });

        this.listenToSocketConnection();
    }

    private listenToSocketConnection() {
        this.ioSocket.on('connect', () => {
            console.log('Conectado al servidor de sockets');
            console.log('ID del socket:', this.ioSocket.id);
        });

        console.log({ id: this.ioSocket.id });


        this.on("join-classroom", function (a: unknown) {
            console.log({ a });

        })

        this.ioSocket.on('disconnect', () => {
            console.log('Desconectado del servidor de sockets');
        });
    }

    public joinClassroom() {
        this.emit("join-classroom", { username: "ejemplo", type: "viewer", roomID: "66f0ad8475743c5bf551baf0" })
    }
}
