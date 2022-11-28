import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WeatherItemComponent, WeatherListComponent, WeatherSearchComponent } from './weather/index';
import { SideBarComponent } from './sidebar.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
  declarations: [
    AppComponent,
    HelloComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SideBarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
