import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaChartTypePickerComponent } from './cda-chart-type-picker.component';

describe('CdaChartTypePickerComponent', () => {
  let component: CdaChartTypePickerComponent;
  let fixture: ComponentFixture<CdaChartTypePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdaChartTypePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdaChartTypePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
