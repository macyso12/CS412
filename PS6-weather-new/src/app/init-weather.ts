export class Init {
  load() {
    if (localStorage.getItem('weather-items') === null || localStorage.getItem('weather-items') === undefined) {
      console.log('Weather items not found!!!');
      const weatherItems = [
        {
          Cityname: 'London',
          description: 'RAINY',
          temperature: 32
        },
        {
          Cityname: 'Mexico City',
          description: 'CLOUDY',
          temperature: 30
        },
        {
          Cityname: 'New York',
          description: 'SUNNY',
          temperature: 28
        }
      ];
      localStorage.setItem('weather-items', JSON.stringify(weatherItems));
    } else {
      console.log('Loading weatherItems..');
    }
  }
}

import { WeatherItem } from './weather/weatherInterface';

export const WEATHER_ITEMS : WeatherItem[] = []