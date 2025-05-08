import { Component, inject, input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';
import { UserSessionService } from '../services/user-session.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-event-post',
  imports: [],
  templateUrl: './event-post.component.html',
  styleUrl: './event-post.component.css'
})
export class EventPostComponent {
  dataService = inject(DataServiceService);
  pathSegments = window.location.pathname.split("/");
  id = Number(this.pathSegments[this.pathSegments.length - 1]);
  comments: Comment[] = []

  userSession = inject(UserSessionService);
    private runningId = 0;
    private currentUser: string | undefined = this.userSession.getUserName();

  post!: Post;

  ngOnInit(){
    this.post = this.dataService.getEventPostById(this.id);
    this.comments = this.dataService.eventPostComments;
  }

  createComment(comment:string){
      const newComment: Comment = {
        author: this.currentUser,
        comment,
        id: this.runningId++
      };
      this.dataService.addEventPostComm(newComment);
    }
}
