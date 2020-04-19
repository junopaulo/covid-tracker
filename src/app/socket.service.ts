import { Injectable } from '@angular/core';

import io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket;
  constructor() {
    this.initSocket();
  }

  initSocket() {
    this.socket = io.connect(environment.SOCKET_ENDPOINT);

    
  }



}
