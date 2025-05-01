import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Database } from '@angular/fire/database';
import { child, get, ref, set } from 'firebase/database';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
  title = "Campus Community Forym";
  dataFromDB: any;

  constructor(private db: Database) {}

  writeData() {
    const dbRef = ref(this.db, 'messages/1');
    set(dbRef, {
      username: "Caden",
      message: "Hello, Firebase!"
    }).then(() => {
      console.log("Data written successfully!");
    }).catch((error) => {
      console.error("Error writing data: ", error);
    });
  }

  readData() {
    const dbRef = ref(this.db);
    get(child(dbRef, `messages/1`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.dataFromDB = snapshot.val();
        console.log(this.dataFromDB);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
}
