import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ChartDto } from '../model/chart-dto.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    const chartData: Array<ChartDto> = [
      {
        'label': 'Pie 1',
        'value': 10
      },
      {
        'label': 'Pie 2',
        'value': 20
      },
      {
        'label': 'Pie 3',
        'value': 30
      },
      {
        'label': 'Pie 4',
        'value': 40
      },
    ];

    return { chartData };

  }

}


