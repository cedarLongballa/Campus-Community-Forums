import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';

@Component({
  selector: 'app-forum-classes',
  imports: [RouterLink],
  templateUrl: './forum-classes.component.html',
  styleUrl: './forum-classes.component.css'
})
export class ForumClassesComponent {
  dataService = inject(DataServiceService);
  posts: Post[] = [];

  ngOnInit(){
    this.posts = this.dataService.classPosts;
  }

  createPost(){
    
  }
}
