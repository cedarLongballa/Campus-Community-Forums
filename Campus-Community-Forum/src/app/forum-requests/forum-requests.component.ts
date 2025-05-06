import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';

@Component({
  selector: 'app-forum-requests',
  imports: [RouterLink],
  templateUrl: './forum-requests.component.html',
  styleUrl: './forum-requests.component.css'
})
export class ForumRequestsComponent {
  dataService = inject(DataServiceService);
  posts: Post[] = [];

  ngOnInit(){
    this.posts = this.dataService.requestPosts;
  }

  createPost(){
    
  }
}
