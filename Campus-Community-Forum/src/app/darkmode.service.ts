import { Injectable, signal } from '@angular/core'; //Use as demonstrated in optional project -Nolan

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkModeSignal = signal<string>('');

  updateDarkMode(){
    this.darkModeSignal.update((value) => (value === "dark" ? '' : "dark"))
  }
}