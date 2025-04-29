import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { WeatherComponent } from './weather/weather.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { ForumsComponent } from './forums/forums.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        title: 'Home Page',
    },
    {
        path: 'userAuth',
        component: LoginSignupComponent,
        title: 'Sign up/Login',
    },
    {
        path: 'weather',
        component: WeatherComponent,
        title: 'Weather',
    },
    {
        path: 'newsletter',
        component: NewsletterComponent,
        title: 'Newsletter',
    },
    {
        path: 'games',
        component: GamesPageComponent,
        title: 'Games',
    },
    {
        path: 'forums',
        component: ForumsComponent,
        title: 'Forums',
    },
];
