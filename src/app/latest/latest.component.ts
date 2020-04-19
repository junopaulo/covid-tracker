import { Component, OnInit } from '@angular/core';
import { CovidstatsService } from '../state/covidstats.service';
import { CovidstatsQuery } from '../state/covidstats.query';
import { Observable } from 'rxjs';
import { ID } from '@datorama/akita';
import { Covidstat } from '../state/covidstat.model';

@Component({
  selector: 'app-covid-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  title: string = 'Latest Stats';
  latest: Covidstat;
  items$: Observable<Covidstat[]>;
  latest$: Observable<Covidstat>;

  constructor(
    private covidstatsService: CovidstatsService,
    private covidstatsQuery: CovidstatsQuery) { }

  ngOnInit(): void {
    this.covidstatsService.get().toPromise();
    this.latest = this.covidstatsService.getStatInitialValue();
    console.log(this.latest);
    this.latest$ = this.covidstatsQuery.selectLast();
    this.latest$.subscribe(item => {
      console.log(item);
      this.latest = item;
    });
  }

  track(_, item) {
    return item.title;
  }

}
