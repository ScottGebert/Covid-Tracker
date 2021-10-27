import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  todayStats: any;
  todayStatsFiltered: any[] = [];
  loaded: boolean = false;

  constructor(
    private statsService: StatisticsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.statsService.getLatestCovidStats().subscribe((resp: any) => {
      this.todayStats = resp.summary;
      this.todayStats.forEach((element: any) => {
        this.todayStatsFiltered.push(element);
        this.loaded = true;
      }, (err: any) => {
        console.error("ERROR grabbing stats", err);
      });
    });
  }

  checked(item: any, event: any) {
    if (event.checked) {
      this.todayStatsFiltered.push(item);
    }
    else {
      this.todayStatsFiltered = this.todayStatsFiltered.filter((obj: any) => {
        return obj.province !== item.province
      });
    }
  }

  route(province: string) {
    this.router.navigate(['province-page/' + province])
  }

  nullCheck(toCheck: String): String {
    if (toCheck == "NULL")
      return "No data";
    else
      return toCheck;
  }

}
