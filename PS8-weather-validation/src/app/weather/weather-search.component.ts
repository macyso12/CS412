import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WeatherItemsService } from '../services/weather-items.service';
import { weatherItems } from './weatherInterface';
import { WeatherItem } from './weatherInterface';
import { WEATHER_ITEMS } from '../init-weather';
import { Subject } from 'rxjs/Subject';
//importing validators to validate form inputs
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather-search',
  template: `
    <section class="weather-search">
      <form [formGroup]="locationGroup" novalidate>
          <label for="city">City</label>
          <input #location formControlName="location" type="text" id="city" name="city" (input)="onSearchLocation($event, location.value)" [required]="true" 
          [ngClass]="{
            'is-invalid':
            locationGroup.get('location')!.touched &&
            locationGroup.get('location')!.invalid
          }" formControlName="location"/>
            <span class="invalid-feedback">Location can't be blank.</span>
          <button type="submit" (click)="onSubmit(e, locationGroup)" [disabled]="locationGroup.invalid">Add City</button>
          <button type="button" (click)="clearWeatherData()">Clear</button>
      </form>
    <p>Form value: {{ locationGroup.value | json }}</p>
    <p>Form status: {{ locationGroup.status | json }}</p>
      <div>
        <span class="info">City found: </span> {{data.name}}
      </div>
    </section>
  `,
  styleUrls: ['../../assets/css/weather-search.css'],
  providers: [WeatherItemsService]
})

export class WeatherSearchComponent implements OnInit {
  public location = new FormControl();
  private searchStream = new Subject<string>();
  data: any = {};

  constructor(
    private builder: FormBuilder,
  ) { }

  locationGroup = new FormGroup({
    location: new FormControl()
  })
  
  // adding validators
  buildForm() {
    this.locationGroup = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  profileForm = this.locationGroup.group({
    City: ['', Validators.required],
  });

  constructor(private weatherItemsService$: WeatherItemsService) { }

  private onSubmit(e: Event, form: FormGroup) {
    this.weatherItemsService$.searchWeatherData(form.value.location).subscribe(
      data => {
        const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
        this.weatherItemsService$.addItem(weatherItem);
      }
    );
    form.reset();
    this.data !== '' ? this.data = {} : this.data;
  }

  private onSearchLocation(event: Event, cityName: string) {
    if (cityName.length > 0) {
      this.searchStream.next(cityName);
    }
  }

  public clearWeatherData() {
    this.weatherItemsService$.clearWeatherItems();
  }

  ngOnInit() {
    this.searchStream
      .debounceTime(700)
      .distinctUntilChanged()
      .switchMap((input: string) => this.weatherItemsService$.searchWeatherData(input))
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
        return this.data;
        });
  }
}