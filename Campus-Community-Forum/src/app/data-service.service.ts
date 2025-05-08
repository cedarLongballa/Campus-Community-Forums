import { Injectable, signal } from '@angular/core';
import { Post } from './post';
import { Auth } from '@angular/fire/auth';
import { User } from 'firebase/auth';
import { Comment } from './comment';

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

  announcementPostComments: Comment[] = [];
  classPostComments: Comment[] = [];
  eventPostComments: Comment[] = [];
  requestPostComments: Comment[] = [];

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

  getAnnPostCommById(id:number): Comment{
    return this.announcementPostComments.filter(post => post.id == id)[0];
  }

  getClassPostCommById(id:number): Comment{
    return this.classPostComments.filter(post => post.id == id)[0];
  }

  getEventPostCommById(id:number): Comment{
    return this.eventPostComments.filter(post => post.id == id)[0];
  }

  getRequestPostCommById(id:number): Comment{
    return this.requestPostComments.filter(post => post.id == id)[0];
  }

  addAnnPostComm(add: Comment){
    this.announcementPostComments.push(add);
  }

  addClassPostComm(add: Comment){
    this.classPostComments.push(add);
  }

  addEventPostComm(add: Comment){
    this.eventPostComments.push(add);
  }

  addRequestPostComm(add: Comment){
    this.requestPostComments.push(add);
  }
}
