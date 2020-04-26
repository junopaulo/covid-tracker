import { Component, OnInit } from '@angular/core';

import { NewsService } from '../state/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private _news: NewsService) { }

  ngOnInit(): void {
    this._news.get();
  }

}
