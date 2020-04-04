import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cda-chart-type-picker',
  templateUrl: './cda-chart-type-picker.component.html',
  styleUrls: ['./cda-chart-type-picker.component.scss']
})
export class CdaChartTypePickerComponent implements OnInit {

  public chartTypeList = [
    { value : "D" , label : "Donut" },
    { value : "P" , label : "Pie" }
  ];
  public selectedType;
  constructor() { }

  ngOnInit() {
    this.selectedType = this.chartTypeList[0];
  }

  public onSelect() {
    console.log(this.selectedType);
  }
}
