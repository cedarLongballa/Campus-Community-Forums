import { Component, inject, input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';

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

  post!: Post;

  ngOnInit(){
    this.post = this.dataService.getEventPostById(this.id)
  }
}
