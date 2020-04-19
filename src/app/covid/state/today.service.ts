import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { TodayStore } from './today.store';
import { Today } from './today.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodayService {

  constructor(private todayStore: TodayStore,
              private http: HttpClient) {
  }

  get() {
    return this.http.get<Today[]>('https://api.covi19api.com/').pipe(tap(entities => {
      this.todayStore.set(entities);
    }));
  }

  add(today: Today) {
    this.todayStore.add(today);
  }

  update(id, today: Partial<Today>) {
    this.todayStore.update(id, today);
  }

  remove(id: ID) {
    this.todayStore.remove(id);
  }
}
