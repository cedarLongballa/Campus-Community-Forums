import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  newsletter = signal("Go to data-service.service.ts to edit this text, or use setNewsletter(string)");

  announcementPosts = [];
  classPosts = [];
  eventPosts = [];
  requestPosts = [];

  setNewsletter(inputNews: string){
    this.newsletter.set(inputNews);
  }
}
