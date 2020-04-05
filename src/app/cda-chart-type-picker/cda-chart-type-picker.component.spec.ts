import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaChartTypePickerComponent } from './cda-chart-type-picker.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChartService } from '../services/chart.service';

describe('CdaChartTypePickerComponent', () => {
  let component: CdaChartTypePickerComponent;
  let fixture: ComponentFixture<CdaChartTypePickerComponent>;
  let service: ChartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdaChartTypePickerComponent ],
      imports: [FormsModule,
      HttpClientTestingModule],
      providers: [ ChartService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdaChartTypePickerComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ChartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setIsDonut in service', () => {
    const spy = spyOn(service, 'setIsDonut');
    component.onSelect();
    expect(spy).toHaveBeenCalledTimes(1);
  })
});
