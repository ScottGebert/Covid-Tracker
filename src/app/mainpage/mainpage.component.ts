import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  todayStats: any = {};
  todayStatsFiltered: any = {};

  constructor(
    private statsService: StatisticsService,

  ) { }

 

  ngOnInit(): void {
    let today = new Date();
    this.statsService.getCovidStatsForDate(String(today.getDate() - 1).padStart(2, '0')+ "-" +  String(today.getMonth() + 1).padStart(2, '0') + "-" + today.getFullYear()).subscribe((resp: any) => {
      this.todayStats = resp;
      console.log(this.todayStats);
      Object.assign(this.todayStatsFiltered,this.todayStats);
    });
  }

  checked(item: any, event: any) {
    console.log(event);
    console.log(item);
    if (event.checked) {
      this.todayStatsFiltered.cases.push(item);
    }
    else {
      this.todayStatsFiltered.cases = this.todayStatsFiltered.cases.filter((obj: any) => {
        console.log(obj.province, item.province)
        return obj.province !== item.province
      });
    }
    console.log(this.todayStatsFiltered);
    console.log(this.todayStats)
  }

}
