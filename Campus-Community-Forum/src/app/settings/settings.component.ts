import { Component, inject } from '@angular/core';
import { DarkModeService } from '../darkmode.service';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})

export class SettingsComponent {
  darkModelService = inject(DarkModeService)

  toggleDarkMode(){
    this.darkModelService.updateDarkMode();
  }
}