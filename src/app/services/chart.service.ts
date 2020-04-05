import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChartDto } from '../model/chart-dto.model'
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
  private apiData = new Subject<Array<ChartDto>>();

  public colorListObs$: Observable<Array<string>> = this.colorList.asObservable();
  public isDonut$: Observable<boolean> = this.isDonut.asObservable();
  public apiDataList$: Observable<Array<ChartDto>> = this.apiData.asObservable();

  constructor(private httpClient: HttpClient) { }

  public setColor(colorList: Array<string>) {
    this.colorList.next(colorList);
  }

  public setIsDonut(isDonut: boolean) {
    this.isDonut.next(isDonut);
  }

  public getChartData() {
    return this.httpClient.get<Array<ChartDto>>(`${this.SERVER_URL}chartData`).pipe(
      tap((res) => this.apiData.next(res)
    ));
  }
}
