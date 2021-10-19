import { Component, OnInit } from '@angular/core';
import { StatisiticsService } from '../services/statisitics.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(
    private statsService: StatisiticsService,
  ) { }

  todayStats: any = {};

  ngOnInit(): void {
    this.statsService.getCovidStatsForDate("01-09-2021").subscribe((resp: any) => {
      this.todayStats = resp;
      console.log(this.todayStats);
    });
  }

}
