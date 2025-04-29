import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Database, ref, set, get, child } from '@angular/fire/database';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Campus Community Forum';
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
