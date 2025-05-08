import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { WeatherComponent } from './weather/weather.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { ForumsComponent } from './forums/forums.component';
import { HomeComponent } from './home/home.component';
import { ForumRequestsComponent } from './forum-requests/forum-requests.component';
import { ForumEventsComponent } from './forum-events/forum-events.component';
import { ForumAnnouncementsComponent } from './forum-announcements/forum-announcements.component';
import { ForumClassesComponent } from './forum-classes/forum-classes.component';
import { RequestPostComponent } from './request-post/request-post.component';
import { EventPostComponent } from './event-post/event-post.component';
import { AnnPostComponent } from './ann-post/ann-post.component';
import { ClassPostComponent } from './class-post/class-post.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
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
    {
        path: 'forums/forum-requests',
        component: ForumRequestsComponent,
        title: 'Forum Requests',
    },
    {
        path: 'forums/forum-events',
        component: ForumEventsComponent,
        title: 'Event Forum',
    },
    {
        path: 'forums/forum-announcements',
        component: ForumAnnouncementsComponent,
        title: 'Announcement Forum',
    },
    {
        path: 'forums/forum-classes',
        component: ForumClassesComponent,
        title: 'Class Forum',
    },
    {
        path: 'forums/forum-requests/:id',
        component: RequestPostComponent,
        title: 'Request Post Detail',
    },
    {
        path: 'forums/forum-events/:id',
        component: EventPostComponent,
        title: 'Event Post Detail',
    },
    {
        path: 'forums/forum-announcements/:id',
        component: AnnPostComponent,
        title: 'Announcement Post Detail',
    },
    {
        path: 'forums/forum-classes/:id',
        component: ClassPostComponent,
        title: 'Class Post Detail',
    },
];
