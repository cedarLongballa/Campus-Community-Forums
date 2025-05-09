import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DarkModeService } from './darkmode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Campus Community Forum';
  darkModeService = inject(DarkModeService);
}
