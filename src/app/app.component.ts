import { Component } from '@angular/core';

import { SocketService } from './socket.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Covid Tracker Philippines';

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    
  }
}
