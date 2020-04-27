import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { CovidstatsStore } from './covidstats.store';
import { Covidstat } from './covidstat.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CovidstatsService {

  today: Date = new Date();
  days: number = 8; // Days you want to subtract
  covidEndpoint = 'https://api.covid19api.com';
  apiUrl = `${this.covidEndpoint}/live/country/philippines`;
  liveMonthUrl = `${this.covidEndpoint}/country/philippines`
 

  constructor(private covidstatsStore: CovidstatsStore,
              private http: HttpClient) {
  }

  getStatInitialValue() : Covidstat {
    return this.covidstatsStore.statInitialValue;
  }

  get() {
    return this.http.get<Covidstat[]>(`${this.apiUrl}`).pipe(tap(entities => {
      this.covidstatsStore.set(entities);
    }));
  }

  getLiveByMonth(month: number) {
    const start = new Date(2020, month, 1);
    const end = new Date(2020, month, 0);
    return this.http.get<Covidstat[]>(`${this.liveMonthUrl}?from=${start.toISOString()}&to=${end.toISOString()}`)
      .pipe(tap(entities => {
        this.covidstatsStore.set(entities);
    }));
  }

  add(covidstat: Covidstat) {
    this.covidstatsStore.add(covidstat);
  }

  update(id, covidstat: Partial<Covidstat>) {
    this.covidstatsStore.update(id, covidstat);
  }

  remove(id: ID) {
    this.covidstatsStore.remove(id);
  }
}
