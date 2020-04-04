import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  SERVER_URL: string = 'http://localhost:8080/api/';

  public static dropdownLookup = [
    { value : "D" , label : "Donut" },
    { value : "P" , label : "Pie" }
  ];
  private colorSubject  = new Subject<string>();
  public colorObs$ : Observable<any> = this.colorSubject.asObservable();
  private chartTypeSubject = new BehaviorSubject<string>("D");
  public chartType$ : Observable<any> = this.chartTypeSubject.asObservable();
  private apiDataSubject = new Subject<any>();
  public apiData$ : Observable<any> = this.apiDataSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  public setColor(color: string) {
    this.colorSubject.next(color);
  }

  public setChartType(type: string) {
    this.chartTypeSubject.next(type);
  }

  public setApiData(data: any) {
    this.apiDataSubject.next(data);
  }

  public getChartData$() {
    return this.httpClient.get(`${this.SERVER_URL}chartData`);
  }
}
