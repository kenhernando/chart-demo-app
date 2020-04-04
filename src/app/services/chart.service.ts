import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  SERVER_URL: string = 'http://localhost:8080/api/';

  public static dropdownLookup = [
    { value: 'D', label: 'Donut' },
    { value: 'P', label: 'Pie' }
  ];
  public static defaultChartColor = '#e0e0e0';

  private colorListSubject = new BehaviorSubject<Array<string>>([ChartService.defaultChartColor]);
  private isDonutSubject = new BehaviorSubject<boolean>(true);
  private apiDataSubject = new Subject<any>();
  private apiLabelListSubject = new Subject<any>();

  public colorListObs$: Observable<any> = this.colorListSubject.asObservable();
  public isDonut$: Observable<any> = this.isDonutSubject.asObservable();
  public apiData$: Observable<any> = this.apiDataSubject.asObservable();
  public apiLabelList$: Observable<any> = this.apiLabelListSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  public setColor(colorList: Array<string>) {
    this.colorListSubject.next(colorList);
  }

  public setIsDonut(isDonut: boolean) {
    this.isDonutSubject.next(isDonut);
  }

  public setApiData(data: any) {
    this.apiDataSubject.next(data);
  }

  public setApiLabels(labelList: any) {
    this.apiLabelListSubject.next(labelList);
  }

  public getChartData$() {
    return this.httpClient.get(`${this.SERVER_URL}chartData`);
  }
}
