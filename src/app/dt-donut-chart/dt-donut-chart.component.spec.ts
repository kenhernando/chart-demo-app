import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtDonutChartComponent } from './dt-donut-chart.component';

describe('DtDonutChartComponent', () => {
  let component: DtDonutChartComponent;
  let fixture: ComponentFixture<DtDonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtDonutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * No need to unit test private methods. 
   * This component shouuld be kept in isolation in all circumstances. 
   * */

});
