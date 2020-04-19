import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { SpectatorsService } from '../spectators.service';

@Component({
  selector: 'app-spectators',
  templateUrl: './spectators.component.html',
  styleUrls: ['./spectators.component.scss']
})
export class SpectatorsComponent implements OnInit, OnDestroy {

  liveTotal: number = 0;


  constructor(private spectatorsService: SpectatorsService) { }

  ngOnInit(): void {
    this.spectatorsService.monitorViewing().subscribe((total) => {
      console.log(total);
      this.liveTotal = total;
    });
    this.spectatorsService.startViewing();
  }

  ngOnDestroy(): void {
    this.spectatorsService.disconnect();
  }

  @HostListener('window:unload', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.spectatorsService.disconnect();
  }

}
