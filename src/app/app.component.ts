import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do List';
  constructor() {
    // setTimeout(() => {
    //   this.title = "changed the title";
    // }, 2000);
  }
}
