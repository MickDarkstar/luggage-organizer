import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'responsive-sidenav';

  verify() {
    alert('Looking good!');
  }

  save() {
    alert('Sparat!');
  }
}
