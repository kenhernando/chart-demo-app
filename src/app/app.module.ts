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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CdaHeaderComponent,
    CdaColorPickerComponent,
    CdaChartTypePickerComponent,
    CdaButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
