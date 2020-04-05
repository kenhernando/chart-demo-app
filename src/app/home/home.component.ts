import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public apiLabelList: Array<any> = null;
  public apiColorList : Array<string> = [];
  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.apiDataList$.subscribe((list)=> {
      this.apiLabelList = list.map((elem) => {
        return { 'label': elem.label };
      });

      /** refresh color list every data retrieval */
      this.apiColorList = [];
      list.forEach(()=> {
        this.apiColorList.push(ChartService.defaultChartColor);
      });
      this.chartService.setColor(this.apiColorList);
    })
  }

  public toggleArrayValue(color, index) {
    this.apiColorList[index] = color;
    this.chartService.setColor(this.apiColorList);
  }

}
