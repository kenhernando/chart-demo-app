import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    const chartData = [
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


