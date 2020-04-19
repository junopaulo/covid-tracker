import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { CovidstatsStore } from './covidstats.store';
import { Covidstat } from './covidstat.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CovidstatsService {

  today: Date = new Date();
  days: number = 7; // Days you want to subtract
  last7Days: Date = new Date(this.today.getTime() - (this.days * 24 * 60 * 60 * 1000));
  apiUrl = 'https://api.covid19api.com/live/country/philippines/status/confirmed/date';
 

  constructor(private covidstatsStore: CovidstatsStore,
              private http: HttpClient) {
  }

  getStatInitialValue() : Covidstat {
    return this.covidstatsStore.statInitialValue;
  }

  get() {
    return this.http.get<Covidstat[]>(`${this.apiUrl}/${this.last7Days.toISOString()}`).pipe(tap(entities => {
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