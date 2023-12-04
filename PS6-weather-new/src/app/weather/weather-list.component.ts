import { Component, OnInit, OnChanges} from '@angular/core';
import { WeatherItemComponent } from './weather-item.component';
import { WeatherItemsService } from '../services/weather-items.service';
import { weatherItems } from './weatherInterface';
import { WeatherItem } from './weatherInterface';

@Component({
  selector: 'app-weather-list',
  template: `
    <section class="weather-list">
      <!--<app-weather-item [weatherItems]='weatherItems'></app-weather-item>-->
      <app-weather-item *ngFor= "let weatheritem of weatheritems" [item]=weatheritem > </app-weather-item>
    </section>
  `,
   styleUrls: [ './weather-list.css' ],
   providers: [WeatherItemsService]
})

export class WeatherListComponent implements OnInit {
    public weatheritems: WeatherItem[];
    public weatherItems: weatherItems[];

    constructor(private weatherItemsService$: WeatherItemsService) {
      this.getWeatherItems();
        
    }

    getWeatherItems(){
         this.weatherItems = this.weatherItemsService$.getWeatherItems();
         this.weatheritems = this.weatherItemsService$.getWeatherItem();
     }

    ngOnInit() {
       this.getWeatherItems();
    }

}