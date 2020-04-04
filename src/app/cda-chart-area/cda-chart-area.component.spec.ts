import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaChartAreaComponent } from './cda-chart-area.component';

describe('CdaChartAreaComponent', () => {
  let component: CdaChartAreaComponent;
  let fixture: ComponentFixture<CdaChartAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdaChartAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdaChartAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
