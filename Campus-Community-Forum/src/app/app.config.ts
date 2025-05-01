import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database'; // <-- ADD THIS

const firebaseConfig = {
  apiKey: "AIzaSyA587uMKoD_ciJRmN30xFafxBuD1oQGqSE",
  authDomain: "my-practice-project-7ac81.firebaseapp.com",
  databaseURL: "https://ccfdatabase-1b564-default-rtdb.firebaseio.com",
  projectId: "my-practice-project-7ac81",
  storageBucket: "my-practice-project-7ac81.firebasestorage.app",
  messagingSenderId: "407688837417",
  appId: "1:407688837417:web:9372df29d3b808f6ea5f38"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())  // <-- ADD THIS LINE
  ]
};
