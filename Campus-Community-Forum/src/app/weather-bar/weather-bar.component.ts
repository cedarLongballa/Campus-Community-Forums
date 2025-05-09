import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-bar.component.html',
  styleUrls: ['./weather-bar.component.css']
})

//Below is the modified version of a generic weather api implementation -Nolan
export class WeatherBarComponent implements OnInit {
  city: string = 'Fargo'; //Weather Bar is locked to Fargo as that is our focus area -Nolan
  currentDay: string = '';
  currentDate: string = '';
  weatherData: any; //API weather data -Nolan

  private apiKey = 'd1ae467f20fb42ad875155546250105';
  private apiUrl = 'https://api.weatherapi.com/v1/current.json'; //forecast for weather page, current for weather bar -Nolan

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeather(); //Get Fargo weather (works on initialization) -Nolan
  }

  getWeather(): void {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${this.city}&aqi=no`; //Url for current weather -Nolan

    this.http.get(url).subscribe({
      next: (data: any) => { //Added any to get location for localDate -Nolan
        this.weatherData = data; //Fetching weather data, and use in html -Nolan
        console.log(data); //Displays available fields (Recommended line) -Nolan

      // Convert Date into Day
      const localDate = new Date(data.location.localtime);
      this.currentDate = localDate.toLocaleDateString();
      this.currentDay = localDate.toLocaleDateString('en-US', { weekday: 'long' });
      },
      error: (err) => {
        console.error('Error fetching weather data', err);
      }
    });
  }
}