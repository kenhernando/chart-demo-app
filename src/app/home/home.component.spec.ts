import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CdaHeaderComponent } from '../cda-header/cda-header.component';
import { CdaColorPickerComponent } from '../cda-color-picker/cda-color-picker.component';
import { CdaChartTypePickerComponent } from '../cda-chart-type-picker/cda-chart-type-picker.component';
import { CdaButtonComponent } from '../cda-button/cda-button.component';
import { CdaChartAreaComponent } from '../cda-chart-area/cda-chart-area.component';
import { DtDonutChartComponent } from '../dt-donut-chart/dt-donut-chart.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChartService } from '../services/chart.service';
import { of, Observable } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const serviceStub = {
    getChartData() {
      return of([{ value: 1, label: 'pie1' }]);
    },
    setColor() { },
    apiDataList$: of([{ value: 1, label: 'pie1' }]),
    colorListObs$: of('#e0e0e0'),
    isDonut$: of(false)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        CdaHeaderComponent,
        CdaColorPickerComponent,
        CdaChartTypePickerComponent,
        CdaButtonComponent,
        CdaChartAreaComponent,
        DtDonutChartComponent
      ],
      imports: [
        FormsModule,
        ColorPickerModule,
        HttpClientTestingModule
      ],
      providers: [{
        provide: ChartService,
        useValue: serviceStub
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should refresh color data', () => {
    let service = fixture.debugElement.injector.get(ChartService);
    const mockColor = '#fff';
    const mockIndex = 0;
    let spy = spyOn(service, 'setColor');
    component.toggleArrayValue(mockColor, mockIndex);
    expect(component.apiColorList).toContain(mockColor);
    expect(spy).toHaveBeenCalledTimes(1);
  })
});
