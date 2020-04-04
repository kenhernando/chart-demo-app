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

  private colorList = new BehaviorSubject<Array<string>>([ChartService.defaultChartColor]);
  private isDonut = new BehaviorSubject<boolean>(true);
  private apiData = new Subject<any>();
  private apiLabelList = new Subject<any>();

  public colorListObs$: Observable<any> = this.colorList.asObservable();
  public isDonut$: Observable<any> = this.isDonut.asObservable();
  public apiData$: Observable<any> = this.apiData.asObservable();
  public apiLabelList$: Observable<any> = this.apiLabelList.asObservable();

  constructor(private httpClient: HttpClient) { }

  public setColor(colorList: Array<string>) {
    this.colorList.next(colorList);
  }

  public setIsDonut(isDonut: boolean) {
    this.isDonut.next(isDonut);
  }

  public setApiData(data: any) {
    this.apiData.next(data);
  }

  public setApiLabels(labelList: any) {
    this.apiLabelList.next(labelList);
  }

  public getChartData$() {
    return this.httpClient.get(`${this.SERVER_URL}chartData`);
  }
}
