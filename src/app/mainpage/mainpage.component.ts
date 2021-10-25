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
      console.log(this.todayStats);
      this.todayStats.forEach((element: any) => {
        this.todayStatsFiltered.push(element);
        this.loaded = true;
      });
    });
  }

  checked(item: any, event: any) {
    console.log(event);
    console.log(item);
    if (event.checked) {
      this.todayStatsFiltered.push(item);
    }
    else {
      this.todayStatsFiltered = this.todayStatsFiltered.filter((obj: any) => {
        console.log(obj.province, item.province)
        return obj.province !== item.province
      });
    }
    console.log(this.todayStatsFiltered);
    console.log(this.todayStats)
  }

  route(province: string) {
    console.log("fired");
    this.router.navigate(['province-page/' + province])
  }

  nullCheck(toCheck: String): String {
    if (toCheck == "NULL")
      return "No data";
    else
      return toCheck;
  }

}
