import { Component, inject, input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';
import { Comment } from '../comment';
import { UserSessionService } from '../services/user-session.service';

@Component({
  selector: 'app-class-post',
  imports: [],
  templateUrl: './class-post.component.html',
  styleUrl: './class-post.component.css'
})
export class ClassPostComponent {
  dataService = inject(DataServiceService);
  pathSegments = window.location.pathname.split("/");
  id = Number(this.pathSegments[this.pathSegments.length - 1]);
  comments: Comment[] = []

  userSession = inject(UserSessionService);
    private runningId = 0;
    private currentUser: string | undefined = this.userSession.getUserName();

  post!: Post;

  ngOnInit(){
    this.post = this.dataService.getClassPostById(this.id)
    this.comments = this.dataService.classPostComments;
  }

  createComment(comment:string){
      const newComment: Comment = {
        author: this.currentUser,
        comment,
        id: this.runningId++
      };
      this.dataService.addClassPostComm(newComment);
    }
}
