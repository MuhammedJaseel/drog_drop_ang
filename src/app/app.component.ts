import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'drag_drop';

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  onSwap(from: number, to: number) {
    console.log(from);
    console.log(to);
  }
}
