import { Component, inject, input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';
import { UserSessionService } from '../services/user-session.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-request-post',
  imports: [],
  templateUrl: './request-post.component.html',
  styleUrl: './request-post.component.css'
})
export class RequestPostComponent {
  dataService = inject(DataServiceService);
  pathSegments = window.location.pathname.split("/");
  id = Number(this.pathSegments[this.pathSegments.length - 1]);

  userSession = inject(UserSessionService);
    private runningId = 0;
    private currentUser: string | undefined = this.userSession.getUserName();

  post!: Post;

  ngOnInit(){
    this.post = this.dataService.getRequestPostById(this.id)
  }

  createComment(comment:string){
      const newComment: Comment = {
        author: this.currentUser,
        comment,
        id: this.runningId++
      };
      this.dataService.addAnnPostComm(newComment);
    }
}
