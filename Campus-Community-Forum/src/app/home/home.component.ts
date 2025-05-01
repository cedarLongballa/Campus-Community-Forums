import { Component, inject } from '@angular/core';
import { Database, ref, set, get, child } from '@angular/fire/database';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Campus Community Forum';
  dataFromDB: any;

  dataService = inject(DataServiceService);

  newsletterContent = this.dataService.newsletter;

  constructor() {}

  
}
