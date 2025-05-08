import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

//Below is the modified version of a generic weather api implementation -Nolan
export class WeatherComponent implements OnInit {
  city: string = 'Fargo'; //To set location, defaults to Fargo as that is our websites focus -Nolan
  weatherData: any; //API weather data -Nolan

  private apiKey = 'd1ae467f20fb42ad875155546250105';
  private apiUrl = 'https://api.weatherapi.com/v1/forecast.json'; //Forecast for weather page, current for weather bar -Nolan

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeather(); //Get location weather (works on initialization, so opening the /weather page is initialize with Fargo weather data) -Nolan
  }

  getWeather(): void {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${this.city}&days=5&aqi=no&alerts=no`; //Added &days=5 AND &alerts=no for forecast -Nolan

    this.http.get(url).subscribe({
      next: (data) => {
        this.weatherData = data; //Fetching weather data, and use in html -Nolan
        console.log(data); //Displays available fields (Recommended line) -Nolan
      },
      error: (err) => {
        console.error('Error fetching weather data', err);
      }
    });
  }
}
