import { Component, OnInit } from '@angular/core';
import { CovidstatsService } from '../state/covidstats.service';
import { CovidstatsQuery } from '../state/covidstats.query';
import { Observable } from 'rxjs';
import { ID } from '@datorama/akita';
import { Covidstat } from '../state/covidstat.model';

import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnInit {

  items$: Observable<Covidstat[]>;
  histogram;
  autoResize = true;

  options: any;

  dates = [];
  cases = [];
  deaths = [];
  recoveries = [];


  constructor(
    private covidstatsService: CovidstatsService,
    private covidstatsQuery: CovidstatsQuery,
  ) { }

  ngOnInit(): void {
    this.items$ = this.covidstatsQuery.selectAll();

    this.items$.subscribe((data) => {
      console.log(data);
      this.composeData(data);
      this.initOptions(this.dates, this.cases, this.deaths, this.recoveries);
    });
  }

  initOptions(dates, cases, deaths, recoveries) {
    this.options = {
      grid: {
        right: '8px',
        containLabel: true,
        left: '8px',
        bottom: '24px'
      },
      legend: {
        data: ['Cases', 'Deaths', 'Recoveries'],
        align: 'left'
      },
      tooltip: {},
      xAxis: {
        data: dates,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'Cases',
        type: 'line',
        symbolSize: 8,
        data: cases,
        animationDelay: function (idx) {
          return idx * 10;
        }
      }, {
        name: 'Deaths',
        type: 'bar',
        data: deaths,
        animationDelay: function (idx) {
          return idx * 10 + 100;
        }
      },{
        name: 'Recoveries',
        type: 'bar',
        data: recoveries,
        animationDelay: function (idx) {
          return idx * 10 + 200;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
  }
  
  composeData(data: Array<Covidstat>) {

    let item, prev; 
    for(let i = 0; i < data.length - 1; i++) {
      prev = data[i];
      item = data[i + 1];
      const date = new Date(item.Date);
      this.dates.push(`${date.getMonth() + 1}/${date.getDate()}`);
      this.cases.push(item.Confirmed - prev.Confirmed);
      this.deaths.push(item.Deaths - prev.Deaths);
      this.recoveries.push(item.Recovered - prev.Recovered);
    }
  }

}
