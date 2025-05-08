import { Component, inject } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Database, ref, set, get } from '@angular/fire/database';
import { CommonModule } from '@angular/common';
import { UserSessionService } from '../services/user-session.service';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
  dataService = inject(DataServiceService);
  db = inject(Database);
  session = inject(UserSessionService);

  newsletterContent = this.dataService.newsletter;
  userEmail: string | null = null;
  isSubscribed: boolean = false;

  ngOnInit() {
    const currentUser = this.session.getUser();
    if (currentUser) {
      this.userEmail = currentUser.email;
      this.checkSubscriptionStatus();
    } else {
      console.log('No user in session.');
    }
  }

  checkSubscriptionStatus() {
    const emailRef = ref(this.db, 'newsletter/subscribers');
    get(emailRef).then((snapshot) => {
      const subscribers = snapshot.exists() ? snapshot.val() : [];
      this.isSubscribed = subscribers.includes(this.userEmail);
    }).catch((error) => {
      console.error("Error checking subscription status:", error);
    });
  }

  subscribe() {
    if (!this.userEmail) return;
    const emailRef = ref(this.db, 'newsletter/subscribers');
    get(emailRef).then((snapshot) => {
      const subscribers = snapshot.exists() ? snapshot.val() : [];
      if (!subscribers.includes(this.userEmail)) {
        subscribers.push(this.userEmail);
        set(emailRef, subscribers).then(() => {
          this.isSubscribed = true;
        });
      }
    });
  }

  unsubscribe() {
    if (!this.userEmail) return;
    const emailRef = ref(this.db, 'newsletter/subscribers');
    get(emailRef).then((snapshot) => {
      const subscribers = snapshot.exists() ? snapshot.val() : [];
      const index = subscribers.indexOf(this.userEmail);
      if (index !== -1) {
        subscribers.splice(index, 1);
        set(emailRef, subscribers).then(() => {
          this.isSubscribed = false;
        });
      }
    });
  }
}
