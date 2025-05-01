import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-newsletter',
  imports: [NavbarComponent],
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
