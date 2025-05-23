import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { WeatherBarComponent } from '../weather-bar/weather-bar.component';

@Component({
  selector: 'app-home',
  imports: [WeatherBarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public dataService: DataServiceService) {}

  newsletterPreview(): string {
    const full = this.dataService.newsletter();
    const previewLength = 500;
    return full.length > previewLength ? full.slice(0, previewLength) + '...' : full;
  }
}
