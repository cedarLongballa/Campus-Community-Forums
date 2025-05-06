import { Component, inject } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-newsletter',
  imports: [],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
  dataService = inject(DataServiceService)
  newsletterContent = this.dataService.newsletter

  subscribe(){
    //add content when user Auth is complete
    //if(logged in){
    //do this}
    //else{
    //go to login page}
  }
}
