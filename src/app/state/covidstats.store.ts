import { Injectable } from '@angular/core';
import { Covidstat } from './covidstat.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CovidstatsState extends EntityState<Covidstat> {}

export function defaultValue(): Covidstat {
  return {
    Country: 'Philippines',
    CountryCode: 'PH',
    Lat: 0,
    Lon: 0,
    Confirmed: 0,
    Deaths: 0,
    Recovered: 0,
    Active: 0,
    Date: 0,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'covidstats', idKey: 'Date' })
export class CovidstatsStore extends EntityStore<CovidstatsState> {

  statInitialValue : Covidstat;

  constructor() {
    super();
    this.statInitialValue = defaultValue();
  }

}

