import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = "";

  checkIfUsernameIsEmpty() {
    return this.username == "";
  }

  onClickResetString() {
    this.username = "";
  }
}
