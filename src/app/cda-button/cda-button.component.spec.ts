import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdaButtonComponent } from './cda-button.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChartService } from '../services/chart.service';
import { of } from 'rxjs';

describe('CdaButtonComponent', () => {
  let component: CdaButtonComponent;
  let fixture: ComponentFixture<CdaButtonComponent>;
  let service: ChartService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdaButtonComponent],
      imports: [HttpClientTestingModule],
      providers: [ ChartService ]
    })

    fixture = TestBed.createComponent(CdaButtonComponent);
    service = TestBed.get(ChartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getChartData in service', () => {
    let spy = spyOn(service, 'getChartData').and.returnValue(of(null));
    component.retrieveData();
    expect(spy).toHaveBeenCalledTimes(1);
  })
});
