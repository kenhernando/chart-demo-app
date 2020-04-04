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
    this.chartService.getChartData$().subscribe( (resp)=> {
      console.log(resp);
      this.chartService.setApiData(resp);
    });
  }

}
