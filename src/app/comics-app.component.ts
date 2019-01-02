import { Component } from '@angular/core';

@Component({
  selector: 'app-comics',
  template: `
    <app-navbar></app-navbar>
    <div class="container">
      <div class="col-md-12"><header>Khan's ComiKozitory</header></div>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./comics-app.component.css']
})
export class AppComponent {
  title = 'Comicository';
}
