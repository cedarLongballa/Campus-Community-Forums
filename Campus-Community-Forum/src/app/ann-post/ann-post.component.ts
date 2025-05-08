import { Component, inject, input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Post } from '../post';

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

  post!: Post;

  ngOnInit(){
    this.post = this.dataService.getAnnPostById(this.id)
  }

  createComment(comment:string){
    
  }
}
