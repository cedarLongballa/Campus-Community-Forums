import { Component, inject, input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';

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

  post!: Post;

  ngOnInit(){
    this.post = this.dataService.getClassPostById(this.id)
  }
}
