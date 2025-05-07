import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';
import { UserSessionService } from '../services/user-session.service';

@Component({
  selector: 'app-forum-requests',
  imports: [RouterLink],
  templateUrl: './forum-requests.component.html',
  styleUrl: './forum-requests.component.css'
})
export class ForumRequestsComponent {
dataService = inject(DataServiceService);
  userSession = inject(UserSessionService);
  posts: Post[] = [];
  private runningId = 0;
  private currentUser = this.userSession.getUserName();

  ngOnInit(){
    this.posts = this.dataService.requestPosts;
  }

  createPost(title: string, description: string){
    const newPost: Post = {
      title,
      author: this.currentUser,
      description,
      id: this.runningId++
    };
    this.dataService.addRequestPost(newPost);
  }
}
