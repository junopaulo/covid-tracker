import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TodayStore, TodayState } from './today.store';

@Injectable({ providedIn: 'root' })
export class TodayQuery extends QueryEntity<TodayState> {

  constructor(protected store: TodayStore) {
    super(store);
  }

}
