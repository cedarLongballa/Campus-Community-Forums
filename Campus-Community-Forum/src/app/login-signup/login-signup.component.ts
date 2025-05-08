import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Database, ref, set, get } from '@angular/fire/database';
import { UserSessionService } from '../services/user-session.service';
import { Router } from '@angular/router';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
  title = 'Campus Community Forum';
  isLoginMode = true;

  signupForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  loginForm = {
    email: '',
    password: ''
  };

  loginResult: string | null = null;

  constructor(
    private auth: Auth,
    private db: Database,
    private session: UserSessionService,
    private router: Router
  ) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.loginResult = null;
  }

  get currentUser() {
    return this.session.getUser();
  }
  
  logout() {
    this.session.clearUser();  // Clear the user session
    this.loginResult = 'You have been logged out.';
    // Optionally, redirect the user to the login page or home page
    this.router.navigate(['/login']);  // Make sure to import Router if needed
  }
  

  signUp() {
    const { firstName, lastName, email, password } = this.signupForm;

    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;
        const userProfile = { firstName, lastName, email };

        // Save profile to database under /users/{uid}
        const userRef = ref(this.db, `users/${userId}`);
        return set(userRef, userProfile).then(() => {
          const user: User = { id: userId, ...userProfile };
          this.session.setUser(user);
          this.loginResult = `User ${firstName} signed up successfully!`;
          this.signupForm = { firstName: '', lastName: '', email: '', password: '' };
        });
      })
      .catch((error) => {
        console.error('Signup error:', error);
        this.loginResult = error.message;
      });
  }

  login() {
    const { email, password } = this.loginForm;

    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid;

        // Fetch user profile from database
        const userRef = ref(this.db, `users/${userId}`);
        get(userRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val();
              const user: User = { id: userId, ...userData };
              this.session.setUser(user);
              this.loginResult = `Welcome back, ${user.firstName}!`;
            } else {
              this.loginResult = 'User profile not found.';
            }
          })
          .catch((error) => {
            console.error('Profile fetch error:', error);
            this.loginResult = 'Failed to load user profile.';
          });
      })
      .catch((error) => {
        console.error('Login error:', error);
        this.loginResult = 'Invalid credentials.';
      });
  }
}
