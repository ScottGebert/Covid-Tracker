import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatisticsService } from '../services/statistics.service';

@Component({
  selector: 'app-province-page',
  templateUrl: './province-page.component.html',
  styleUrls: ['./province-page.component.scss']
})
export class ProvincePageComponent implements OnInit {
  province: string = "";
  constructor(
    private statsService: StatisticsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.province = this.router.url.substring(this.router.url.lastIndexOf("/") + 1, this.router.url.length);
  }

  routeHome() {
    this.router.navigate(['main-page'])
  }

}
