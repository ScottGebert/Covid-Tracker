import { publishFacade } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __assign } from 'tslib';
import { StatisticsService } from '../services/statistics.service';

@Component({
  selector: 'app-province-page',
  templateUrl: './province-page.component.html',
  styleUrls: ['./province-page.component.scss']
})
export class ProvincePageComponent implements OnInit {
  province: string = "";
  provinceWideStats: any = {};
  healthZoneStats:any = {};
  loaded: Boolean  = false;

  constructor(
    private statsService: StatisticsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.province = this.router.url.substring(this.router.url.lastIndexOf("/") + 1, this.router.url.length).replace("%20", " ");
    this.provinceWideStats = this.statsService.getCovidStatsForProvince(this.province).subscribe(resp => {
      this.provinceWideStats = resp.summary[0];
      this.loaded = true;
    }, err => {
      console.error('ERROR In Province wide stats', err);
    });
    this.healthZoneStats = this.statsService.getCovidStatsForZones(this.province);
  }

  routeHome() {
    this.router.navigate(['main-page'])
  }

  nullCheck(toCheck: String): String {
    if (toCheck == "NULL")
      return "No data";
    else
      return toCheck;
  }

}
