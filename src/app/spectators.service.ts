import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpectatorsService {


  constructor(private socketService: SocketService) {
    //this.socketService.initSocket();
  }

  public startViewing = () => {
    this.socketService.socket.emit('viewing');
  }

  public disconnect = () => {
    this.socketService.disconnect();
  }


  public monitorViewing = () : Observable<any> => {
    return Observable.create((observer) => {
        this.socketService.socket.on('viewing', (total) => {
            console.log(total);
            observer.next(total);
        });
    });
}




}
