import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-cda-color-picker',
  templateUrl: './cda-color-picker.component.html',
  styleUrls: ['./cda-color-picker.component.scss']
})
export class CdaColorPickerComponent implements OnInit {

  constructor(private chartService: ChartService) { }

  ngOnInit() {
  }
  public onChange(colorInput) {
    this.chartService.setColor(colorInput);
  }
}
