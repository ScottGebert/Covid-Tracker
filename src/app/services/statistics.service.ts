import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = "https://api.opencovid.ca/";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private provinceAbrevations: { [province: string]: string } = {
    "Alberta": "AB",
    "BC": "BC",
    "Manitoba": "MB",
    "New Brunswick": "NB",
    "NL": "NL",
    "NWT": "NT",
    "Nova Scotia": "NS",
    "Nunavut": "NU",
    "Ontario": "ON",
    "PEI": "PE",
    "Quebec": "QC",
    "Saskatchewan": "SK",
    "Yukon": "YT",
    "Repatriated": "RP"
  }

  private provinceHealthCodes: { [province: string]: string[] } = {
    "Alberta": ["4832", "4833", "4834", "4835", "4831"],
    "BC": ["591", "592", "593", "594", "595"],
    "Manitoba": ["4603", "4604", "4602", "4605", "4601"],
    "New Brunswick": ["1301", "1302", "1303", "1304", "1035", "1036", "1037",],
    "NL": ["1012", "1013", "1014", "1011"],
    "NWT": ["6101"],
    "Nova Scotia": ["1201", "1202", "1203", "1204"],
    "Nunavut": ["6201"],
    "Ontario": ["3526", "3527", "3540", "3530", "3558", "3533", "3534", "3535", "3536", "3537", "3538", "3539", "3541", "3542", "3543", "3544", "3546", "3547", "3549", "3551", "3553", "3555", "3556", "3557", "3560", "3575", "3561", "3562", "3563", "3595", "3565", "3566", "3568", "3570",],
    "PEI": ["1100"],
    "Quebec": [ "2408", "2401", "2403", "2412", "2409", "2405", "2411", "2414", "2415", "2413", "2404", "2416", "2406", "2410", "2417", "2407", "2402", "2418"],
    "Saskatchewan": ["471", "472", "473", "474", "475", "476"],
    "Yukon": ["6001"],
    "Repatriated": [],
  }

  constructor(
    private http: HttpClient,
  ) { }

  getCovidStatsForDate(date: string): Observable<any> {
    return this.http.get(BASEURL + "timeseries?stat=cases&loc=prov&date=" + date);
  }

  getLatestCovidStats(): Observable<any> {
    return this.http.get(BASEURL + "summary?loc=prov");
  }

  getCovidStatsForProvince(prov: string): Observable<any> {
    return this.http.get(BASEURL + "summary?loc=" + this.provinceAbrevations[prov]);
  }

  getCovidStatsForZones(prov: string): any {
    let toReturn: any = [];
    this.provinceHealthCodes[prov].forEach(code => {
      this.http.get(BASEURL + "summary?loc=" + code).subscribe((resp: any) => {
        if (resp.summary[0]) {
          toReturn.push(...resp.summary);
        }
        console.log("got zone", resp);
      }, err => {
        console.error("ERROR getting for zone", err)
      });
    });
    return toReturn
  }
}
