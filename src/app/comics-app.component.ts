import { Component } from '@angular/core';

@Component({
  selector: 'app-comics',
  template: `
  <app-navbar></app-navbar>
  <div class="container">
  <header class="row" class="span12">ComiKository</header>
  </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./comics-app.component.css']
})
export class AppComponent {
  title = 'Comicository';
}
