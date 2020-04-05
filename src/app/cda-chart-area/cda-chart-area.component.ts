import { Component, OnInit, ViewChild } from '@angular/core';
import { DtDonutChartComponent } from '../dt-donut-chart/dt-donut-chart.component';
import { combineLatest } from 'rxjs';
import { ChartService } from '../services/chart.service';


export interface InputParams {
  chartData : number[],
  color: string,
  isDonut: boolean
}

@Component({
  selector: 'app-cda-chart-area',
  templateUrl: './cda-chart-area.component.html',
  styleUrls: ['./cda-chart-area.component.scss']
})

export class CdaChartAreaComponent implements OnInit {

  @ViewChild('donutChart', { static: true }) chart: DtDonutChartComponent;

  public selectedType: string;
  public inputParams : InputParams = null;
  constructor(private chartService: ChartService) { }

  ngOnInit() {
    combineLatest(
      this.chartService.colorListObs$,
      this.chartService.isDonut$,
      this.chartService.apiDataList$
    ).subscribe(([colorList, isDonut, dataList] : any) => {
      const apiDataList = dataList.map((elem) => {
        return elem.value;
      });
      this.inputParams = {
        color: colorList,
        isDonut: isDonut,
        chartData : apiDataList
      }
    }); 
  }

}
