import { Injectable } from '@angular/core';
import { Init } from '../init-weather';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { weatherItems } from '../weather/weatherInterface';
import { WeatherItem } from '../weather/weatherInterface';
import { WEATHER_ITEMS } from '../init-weather';

import 'rxjs/Rx';

@Injectable()
export class WeatherItemsService extends Init {
  private APPID: string;
  private API_URL: string;

  constructor(private _http: Http) {
    super()
    console.log('Weather Items Service Init...');
    this.load();
    this.APPID = '2e7e1d8fabd7c153330e11d1f13782d9';
    this.API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  }

  public getWeatherItems() {
    const weatherItems = JSON.parse(localStorage.getItem('weather-items'));
    return weatherItems;
  }

  public getWeatherItem() {
    return WEATHER_ITEMS;
  }

  clearWeatherItems() {
    WEATHER_ITEMS.splice(0);
  }

  public addItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityName: string): Observable<any> {
    return this._http.get(this.API_URL + cityName + '&APPID=' + this.APPID + '&units=metric')
      .map(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
        return Observable.throw(error.json());
      });

  }
}