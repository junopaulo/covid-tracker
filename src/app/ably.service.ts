import { Injectable } from '@angular/core';

import * as Ably from 'ably';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AblyService {

  private BBC_NEWS = '[product:ably-bbc/news]category:home';
  private ably;
  public channel;
  

  constructor() { 
    this.ably =  new Ably.Realtime(environment.ABLY_API_KEY);
  }

  getNewsChannel() {
    return this.ably.channels.get(this.BBC_NEWS);
  }


}
