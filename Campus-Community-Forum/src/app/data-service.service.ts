import { Injectable, signal } from '@angular/core';
import { Post } from './post';
import { Auth } from '@angular/fire/auth';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  newsletter = signal("Go to data-service.service.ts to edit this text, or use setNewsletter(string)");

  announcementPosts: Post[] = [];
  classPosts: Post[] = [];
  eventPosts: Post[] = [];
  requestPosts: Post[] = [];

  setNewsletter(inputNews: string){
    this.newsletter.set(inputNews);
  }

  getAnnPostById(id:number): Post{
    return this.announcementPosts.filter(post => post.id == id)[0];
  }

  getClassPostById(id:number): Post{
    return this.classPosts.filter(post => post.id == id)[0];
  }

  getEventPostById(id:number): Post{
    return this.eventPosts.filter(post => post.id == id)[0];
  }

  getRequestPostById(id:number): Post{
    return this.requestPosts.filter(post => post.id == id)[0];
  }

  addAnnPost(add: Post){
    this.announcementPosts.push(add);
  }

  addClassPost(add: Post){
    this.classPosts.push(add);
  }

  addEventPost(add: Post){
    this.eventPosts.push(add);
  }

  addRequestPost(add: Post){
    this.requestPosts.push(add);
  }
}
