import { Injectable, signal } from '@angular/core';
import { Post } from './post';

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

  // getAnnouncemnetPostById(id:number): Post{
  //   return this.announcementPosts.filter(post => post.id == id)[0];
  // }
}
