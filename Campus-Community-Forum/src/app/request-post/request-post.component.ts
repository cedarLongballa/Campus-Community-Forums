import { Component, inject, input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';

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

  post!: Post;

  ngOnInit(){
    this.post = this.dataService.getRequestPostById(this.id)
  }

  createComment(comment:string){
    
  }
}
