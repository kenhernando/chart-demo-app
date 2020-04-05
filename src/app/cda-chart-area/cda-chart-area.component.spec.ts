import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaChartAreaComponent } from './cda-chart-area.component';
import { DtDonutChartComponent } from '../dt-donut-chart/dt-donut-chart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChartService } from '../services/chart.service';
import { of } from 'rxjs';

describe('CdaChartAreaComponent', () => {
  let component: CdaChartAreaComponent;
  let fixture: ComponentFixture<CdaChartAreaComponent>;
  let service: ChartService;

  const serviceStub = {
    getChartData() {
      return of([{ value: 10, label: 'pie1' }]);
    },
    setColor() { },
    apiDataList$: of([{ value: 10, label: 'pie1' }]),
    colorListObs$: of('#e0e0e0'),
    isDonut$: of(false)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdaChartAreaComponent,
        DtDonutChartComponent],
      imports: [HttpClientTestingModule],
      providers: [{
        provide: ChartService,
        useValue: serviceStub
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdaChartAreaComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ChartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should refresh chartData with api data', () => {
    spyOn(service, 'getChartData');
    expect(component.inputParams.chartData).toEqual([10]);
  })
});
