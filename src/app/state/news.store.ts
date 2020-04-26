import { Injectable } from '@angular/core';
import { News } from './news.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface NewsState extends EntityState<News> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'news' })
export class NewsStore extends EntityStore<NewsState> {

  constructor() {
    super();
  }

}

