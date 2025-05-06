import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideAuth, getAuth } from '@angular/fire/auth'; // <-- ✅ ADD THIS

const firebaseConfig = {
  apiKey: "AIzaSyDZadSXXPftWCJP7-BhqXWuYyVBP-LN3Jo",
  authDomain: "ccfdatabase-1b564.firebaseapp.com",
  databaseURL: "https://ccfdatabase-1b564-default-rtdb.firebaseio.com",
  projectId: "ccfdatabase-1b564",
  storageBucket: "ccfdatabase-1b564.firebasestorage.app",
  messagingSenderId: "456819205686",
  appId: "1:456819205686:web:943b4e1f2671ccb979da97"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()) // <-- ✅ ADD THIS LINE
  ]
};
