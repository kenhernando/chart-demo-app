import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-cda-button',
  templateUrl: './cda-button.component.html',
  styleUrls: ['./cda-button.component.scss']
})
export class CdaButtonComponent {

  constructor(private chartService: ChartService) { }

  public retrieveData() {
    this.chartService.getChartData().subscribe();
  }

}
