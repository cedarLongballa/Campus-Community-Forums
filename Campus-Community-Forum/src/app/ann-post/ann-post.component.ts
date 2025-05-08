import { Component, inject, input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';
import { UserSessionService } from '../services/user-session.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-ann-post',
  imports: [],
  templateUrl: './ann-post.component.html',
  styleUrl: './ann-post.component.css'
})
export class AnnPostComponent {
  dataService = inject(DataServiceService);
  pathSegments = window.location.pathname.split("/");
  id = Number(this.pathSegments[this.pathSegments.length - 1]);

  userSession = inject(UserSessionService);
  private runningId = 0;
  private currentUser: string | undefined = this.userSession.getUserName();
  comments: Comment[] = [];

  post!: Post;

  ngOnInit(){
    this.post = this.dataService.getAnnPostById(this.id)
    this.comments = this.dataService.announcementPostComments;
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
