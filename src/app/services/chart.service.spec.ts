import { TestBed } from '@angular/core/testing';

import { ChartService } from './chart.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ChartService', () => {
  let service: ChartService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChartService]
    });
    service = TestBed.get(ChartService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to retrieve data from API', () => {
    const dummyData = [
      {
        'label': 'Pie 1',
        'value': 10
      },
      {
        'label': 'Pie 2',
        'value': 20
      }
    ];
    service.getChartData().subscribe(resp => {
      expect(resp.length).toBe(2);
      expect(resp).toEqual(dummyData);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/chartData');
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  })

  it('should set isDonut value', () => {
    service.setIsDonut(false);
    service.isDonut$.subscribe((res)=> {
      expect(res).toBeFalsy();
    })
  });

  it('should set colorList value', () => {
    const mockColor = ['#fff'];
    service.setColor(mockColor);
    service.colorListObs$.subscribe((res)=> {
      expect(res).toEqual(mockColor);
    })
  });

  afterEach(() => {
    httpMock.verify();
  });  
});
