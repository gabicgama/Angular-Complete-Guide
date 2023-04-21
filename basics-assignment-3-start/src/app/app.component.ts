import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  texto: string = "Um texto de exemplo que será mostrado";;
  clicked: boolean = false;
  clicks = [];

  onClick() {
    this.clicked = !this.clicked;
    this.clicks.push(new Date());
  }
}
