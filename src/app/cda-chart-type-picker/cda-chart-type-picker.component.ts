import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-cda-chart-type-picker',
  templateUrl: './cda-chart-type-picker.component.html',
  styleUrls: ['./cda-chart-type-picker.component.scss']
})
export class CdaChartTypePickerComponent implements OnInit {

  public chartTypeList = ChartService.dropdownLookup;
  public selectedType;
  public partitionList = [];
  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.selectedType = this.chartTypeList[0];
    this.chartService.apiLabelList$.subscribe((list)=> {
      this.partitionList = list;
    });
  }

  public onSelect() {
    this.chartService.setIsDonut(this.selectedType.value == 'D');
  }
}
