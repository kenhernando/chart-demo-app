import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CdaHeaderComponent } from './cda-header/cda-header.component';
import { CdaColorPickerComponent } from './cda-color-picker/cda-color-picker.component';
import { CdaChartTypePickerComponent } from './cda-chart-type-picker/cda-chart-type-picker.component';
import { CdaButtonComponent } from './cda-button/cda-button.component';
import { CdaChartAreaComponent } from './cda-chart-area/cda-chart-area.component';
import { DtDonutChartComponent } from './dt-donut-chart/dt-donut-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CdaHeaderComponent,
    CdaColorPickerComponent,
    CdaChartTypePickerComponent,
    CdaButtonComponent,
    CdaChartAreaComponent,
    DtDonutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorPickerModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
