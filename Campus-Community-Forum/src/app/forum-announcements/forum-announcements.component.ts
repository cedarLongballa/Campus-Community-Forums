import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';
import { UserSessionService } from '../services/user-session.service';

@Component({
  selector: 'app-forum-announcements',
  imports: [RouterLink],
  templateUrl: './forum-announcements.component.html',
  styleUrl: './forum-announcements.component.css'
})
export class ForumAnnouncementsComponent {
  dataService = inject(DataServiceService);
  userSession = inject(UserSessionService);
  posts: Post[] = [];
  private runningId = 0;
  private currentUser = this.userSession.getUserName();

  ngOnInit(){
    this.posts = this.dataService.announcementPosts;
  }

  createPost(title: string, description: string){
    const newPost: Post = {
      title,
      author: this.currentUser,
      description,
      id: this.runningId++
    };
    this.dataService.addAnnPost(newPost);
  }
}
