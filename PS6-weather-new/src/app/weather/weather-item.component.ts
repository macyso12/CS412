import { Component, OnInit, Input } from '@angular/core';
import { WeatherItemsService } from '../services/weather-items.service';
import { weatherItems } from './weatherInterface';
import { WeatherItem } from './weatherInterface';

@Component({
  selector: 'app-weather-item',
  template: `
    <!--<article *ngFor="let item of weatherItems" class="weather-element">
      <div class="col-1">
        <h3>
          {{item.Cityname}}
        </h3>
        <p class="info">{{item.description}}</p>
      </div>
      <div class="col-2">
        <span class="temperature">
          {{item.temperature}}°C
        </span>
      </div>
    </article>-->
    <article class="weather-element">
        <div class="col-1">
            <h3>{{ weatherItem.cityName }}</h3>
            <p class="info">{{ weatherItem.description }}</p>
        </div>
        <div class="col-2">
            <span class="temperature">{{ weatherItem.temperature }}°C</span>
        </div>
    </article>    
  `,
  styleUrls: ['./weather-item.css'],
})

export class WeatherItemComponent {
  @Input() weatherItems: weatherItems[];
  @Input('item') weatherItem : WeatherItem;
}