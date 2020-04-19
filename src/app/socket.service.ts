import { Injectable } from '@angular/core';

import io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket;
  constructor() {
  }

  initSocket() {
    this.socket = io.connect(environment.SOCKET_ENDPOINT);
  }

  disconnect() {
    this.socket.disconnect();
  
  }

}
