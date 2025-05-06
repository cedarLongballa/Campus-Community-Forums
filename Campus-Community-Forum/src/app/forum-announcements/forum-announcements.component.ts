import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';

@Component({
  selector: 'app-forum-announcements',
  imports: [RouterLink],
  templateUrl: './forum-announcements.component.html',
  styleUrl: './forum-announcements.component.css'
})
export class ForumAnnouncementsComponent {
  dataService = inject(DataServiceService);
  posts: Post[] = [];

  ngOnInit(){
    this.posts = this.dataService.announcementPosts;
  }

  createPost(title: string, question: string){
    
  }
}
