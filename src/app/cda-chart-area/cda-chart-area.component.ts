import { Component, OnInit, ViewChild } from '@angular/core';
import { DtDonutChartComponent } from '../dt-donut-chart/dt-donut-chart.component';
import { combineLatest } from 'rxjs';
import { ChartService } from '../services/chart.service';


export interface InputParams {
  chartData : number[],
  color: string
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
      this.chartService.colorObs$,
      this.chartService.chartType$,
      this.chartService.apiData$
    ).subscribe(([color, type, data] : any) => {
      this.selectedType = type;
      this.inputParams = {
        chartData : data,
        color: color
      }
    }); 
  }

}
