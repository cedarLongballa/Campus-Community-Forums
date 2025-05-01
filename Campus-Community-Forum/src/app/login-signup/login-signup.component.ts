import { Component } from '@angular/core';
import { Database } from '@angular/fire/database';
import { ref, set, push, get, child } from 'firebase/database';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserSessionService } from '../services/user-session.service';


export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string; // not recommended in production
}

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
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

  constructor(private db: Database, private session: UserSessionService) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.loginResult = null;
  }

  signUp() {
    const dbRef = ref(this.db);
  
    get(child(dbRef, 'users'))
      .then((snapshot) => {
        const users = snapshot.exists() ? snapshot.val() : {};
        const emailExists = Object.values(users).some(
          (user: any) => user.email === this.signupForm.email
        );
  
        if (emailExists) {
          this.loginResult = 'An account with this email already exists.';
          return;
        }
  
        // Proceed with user creation
        const usersRef = ref(this.db, 'users');
        const newUserRef = push(usersRef);
  
        const userData = {
          id: newUserRef.key,
          ...this.signupForm
        };
  
        set(newUserRef, userData)
          .then(() => {
            this.loginResult = `User ${this.signupForm.firstName} signed up successfully!`;
            this.signupForm = { firstName: '', lastName: '', email: '', password: '' };
          })
          .catch((error) => {
            console.error('Signup error:', error);
            this.loginResult = 'Signup failed.';
          });
      })
      .catch((error) => {
        console.error('Email check failed:', error);
        this.loginResult = 'Error checking for duplicate emails.';
      });
  }
  

  login() {
    const dbRef = ref(this.db);
    get(child(dbRef, 'users'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const users = snapshot.val();
          const foundUser = Object.values(users).find(
            (user: any) =>
              user.email === this.loginForm.email &&
              user.password === this.loginForm.password
          ) as User | undefined;
          
          if (foundUser) {
            this.session.setUser(foundUser);
            this.loginResult = `Welcome back, ${foundUser.firstName}!`;
          } else {
            this.loginResult = 'Invalid credentials.';
          }
        } else {
          this.loginResult = 'No users found.';
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        this.loginResult = 'Login failed.';
      });
  }
}
