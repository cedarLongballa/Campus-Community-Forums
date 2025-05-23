// user-session.service.ts
import { Injectable } from '@angular/core';
import { User } from '../login-signup/login-signup.component'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  private currentUser: User | null = null;

  setUser(user: User) {
    this.currentUser = user;
    localStorage.setItem('activeUser', JSON.stringify(user)); // Optional: persist across reloads
  }

  getUser(): User | null {
    const storedUser = localStorage.getItem('activeUser');
    this.currentUser = storedUser ? JSON.parse(storedUser) : null;
    return this.currentUser;
  }
  

  clearUser() {
    this.currentUser = null;
    localStorage.removeItem('activeUser');
  }

  getUserName() {
    return this.getUser()?.email;
  }
  
}
