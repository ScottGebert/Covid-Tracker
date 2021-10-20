import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = "https://api.opencovid.ca/";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private provinceAbrevations: { [province: string] : string} = {
    "Alberta" : "AB",
    "BC": "BC",
    "Manitoba" : "MB",
    "New Brunswick" : "NB",
    "NL" : "NL",
    "NWT" : "NT",
    "Nova Scotia" : "NS",
    "Nunavut" : "NU",
    "Ontario" : "ON",
    "PEI" : "PE",
    "Quebec" : "QC",
    "Saskatchewan" : "SK",
    "Yukon" : "YT",
    "Repatriated" : "RP"
  }

  private provinceHealthCodes: { [province: string] : string[]} = {
    "Alberta" : ["4832", "4833","4834","4835" ],
    // "BC": "BC",
    // "Manitoba" : "MB",
    // "New Brunswick" : "NB",
    // "NL" : "NL",
    // "NWT" : "NT",
    // "Nova Scotia" : "NS",
    // "Nunavut" : "NU",
    // "Ontario" : "ON",
    // "PEI" : "PE",
    // "Quebec" : "QC",
    // "Saskatchewan" : "SK",
    // "Yukon" : "YT",
    // "Repatriated" : "RP"
  }




  constructor(
    private http: HttpClient,
  ) { }

  getCovidStatsForDate(date: string) : Observable<any> {
    return this.http.get(BASEURL + "summary?stat=cases&loc=prov&date=" + date);
  }

  getCovidStatsForProvince(prov : string) : Observable<any> {
    return this.http.get(BASEURL + "summary?loc=" + this.provinceAbrevations[prov]);
  }

  getCovidStatsForZones(prov :string)  : any {
    let toReturn: any = [];
    this.provinceHealthCodes[prov].forEach(code => {
      this.http.get(BASEURL + "summary?loc=" + code).subscribe((resp:any) => {
        toReturn.push(resp.summary.at(0));
      });
    });
    return toReturn
  }

}
