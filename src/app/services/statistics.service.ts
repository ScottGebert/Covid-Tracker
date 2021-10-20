import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = "https://api.opencovid.ca/";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(
    private http: HttpClient,
  ) { }

  getCovidStatsForDate(date: string) : Observable<any> {
    return this.http.get(BASEURL + "timeseries?stat=cases&loc=prov&date=" + date);
  }
}
