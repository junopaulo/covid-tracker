import { Component, OnInit } from '@angular/core';
import { SpectatorsService } from '../spectators.service';

@Component({
  selector: 'app-spectators',
  templateUrl: './spectators.component.html',
  styleUrls: ['./spectators.component.scss']
})
export class SpectatorsComponent implements OnInit {

  liveTotal: number = 0;
  constructor(private spectatorsService: SpectatorsService) { }

  ngOnInit(): void {
    this.spectatorsService.monitorViewing().subscribe((total) => {
      console.log(total);
      this.liveTotal = total;
    });
    this.spectatorsService.startViewing();
  }

}
