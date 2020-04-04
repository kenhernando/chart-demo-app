import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-cda-color-picker',
  templateUrl: './cda-color-picker.component.html',
  styleUrls: ['./cda-color-picker.component.scss']
})
export class CdaColorPickerComponent implements OnInit {

  constructor() { }

  @Input() label;
  @Output() onColorPick: EventEmitter<any> = new EventEmitter();

  public color = "#e0e0e0";
  ngOnInit() {
  }
  public onChange(colorInput) {
    this.onColorPick.emit(colorInput);
  }
}
