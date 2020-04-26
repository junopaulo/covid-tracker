import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { NewsStore } from './news.store';
import { News } from './news.model';
import { tap } from 'rxjs/operators';

import { AblyService } from '../ably.service';

@Injectable({ providedIn: 'root' })
export class NewsService {

  constructor(private newsStore: NewsStore,
              private http: HttpClient,
              private ably: AblyService) {
  }

  get() {
    this.ably.getNewsChannel().subscribe((message) => {
      console.log(message.data);
    });
    // return this.http.get<News[]>('https://api.com').pipe(tap(entities => {
    //   this.newsStore.set(entities);
    // }));
  }

  add(news: News) {
    this.newsStore.add(news);
  }

  update(id, news: Partial<News>) {
    this.newsStore.update(id, news);
  }

  remove(id: ID) {
    this.newsStore.remove(id);
  }
}
