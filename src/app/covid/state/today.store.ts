import { Injectable } from '@angular/core';
import { Today } from './today.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface TodayState extends EntityState<Today> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'today' })
export class TodayStore extends EntityStore<TodayState> {

  constructor() {
    super();
  }

}

