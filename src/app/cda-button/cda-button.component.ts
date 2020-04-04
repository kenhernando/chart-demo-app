import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-cda-button',
  templateUrl: './cda-button.component.html',
  styleUrls: ['./cda-button.component.scss']
})
export class CdaButtonComponent implements OnInit {

  constructor(private chartService: ChartService) { }

  ngOnInit() {
  }

  public generateChart() {
    this.chartService.getChartData$().subscribe( (resp: any)=> {
      const apiLabelList : Array<string> = resp.map((elem, index)=> {
        return { 'index' : index, 'label' : elem.label };
      });
      const apiDataList = resp.map((elem)=> {
        return elem.value;
      });
      this.chartService.setApiData(apiDataList);
      this.chartService.setApiLabels(apiLabelList);
    });
  }

}
