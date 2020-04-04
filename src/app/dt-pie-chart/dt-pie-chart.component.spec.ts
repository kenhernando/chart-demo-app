import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtPieChartComponent } from './dt-pie-chart.component';

describe('DtPieChartComponent', () => {
  let component: DtPieChartComponent;
  let fixture: ComponentFixture<DtPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
