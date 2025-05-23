import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';
import { UserSessionService } from '../services/user-session.service';

@Component({
  selector: 'app-forum-events',
  imports: [RouterLink],
  templateUrl: './forum-events.component.html',
  styleUrl: './forum-events.component.css'
})
export class ForumEventsComponent {
dataService = inject(DataServiceService);
  userSession = inject(UserSessionService);
  posts: Post[] = [];
  private runningId = 0;
  private currentUser = this.userSession.getUserName();

  ngOnInit(){
    this.posts = this.dataService.eventPosts;
  }

  createPost(title: string, description: string){
    const newPost: Post = {
      title,
      author: this.currentUser,
      description,
      id: this.runningId++
    };
    this.dataService.addEventPost(newPost);
  }
}
