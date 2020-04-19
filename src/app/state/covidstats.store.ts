import { Injectable } from '@angular/core';
import { Covidstat } from './covidstat.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CovidstatsState extends EntityState<Covidstat> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'covidstats' })
export class CovidstatsStore extends EntityStore<CovidstatsState> {

  constructor() {
    super();
  }

}

