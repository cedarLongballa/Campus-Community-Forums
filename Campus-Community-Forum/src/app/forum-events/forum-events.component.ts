import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';

@Component({
  selector: 'app-forum-events',
  imports: [RouterLink],
  templateUrl: './forum-events.component.html',
  styleUrl: './forum-events.component.css'
})
export class ForumEventsComponent {
  dataService = inject(DataServiceService);
  posts: Post[] = [];

  ngOnInit(){
    this.posts = this.dataService.eventPosts;
  }

  createPost(){
    
  }
}
