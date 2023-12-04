// tipo de marcador
export interface weatherItems {
  Cityname?: string;
  description: string;
  temperature: number;
}

export class WeatherItem {
    constructor(public cityName:string, public description:string, public temperature :number){
        
        
    }
}