# ChartDemoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Components
* home - component containing the landing page of the application
* cda-chart-type-picker - component contains the dropdown for the chart types
* cda-color-picker - component containing the color picker
* cda-button - button component that would trigger API call
* cda-chart-area - this component act as a container or wrapper for d3 chart component itself. This is to isolate angular behavior from d3 manipulations.
* cda-header -  static header component containing logo and application name
* dt-donut-chart - component containing the svg for d3 chart

## Services
* data service - Acts as the in-memory database for **angular-in-memory-web-api**. This is where mock data resides.
* chart service - service that retrieves chart data using rest services. This also holds shared data across the components. 

## References

* `https://medium.com/better-programming/reactive-charts-in-angular-8-using-d3-4550bb0b4255`
* `https://www.d3-graph-gallery.com/graph/donut_basic.html`
* `https://www.npmjs.com/package/ngx-color-picker`
* `https://github.com/angular/in-memory-web-api`
