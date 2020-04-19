import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CovidstatsStore, CovidstatsState } from './covidstats.store';

@Injectable({ providedIn: 'root' })
export class CovidstatsQuery extends QueryEntity<CovidstatsState> {

  constructor(protected store: CovidstatsStore) {
    super(store);
  }

}
