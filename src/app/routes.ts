import { Routes } from '@angular/router';

import {
  ComicListResolver,
  ComicDetailsComponent,
  ComicsListComponent,
  ComicsRouteActivator,
  AddComicsComponent
} from './comics/index';


export const appRoutes: Routes = [
  { path: 'comics', component: ComicsListComponent, resolve: { comics: ComicListResolver} },
  { path: 'comics/add', component: AddComicsComponent },
  { path: 'comics/:id', component: ComicDetailsComponent, canActivate: [ComicsRouteActivator] },
  { path: '', redirectTo: '/comics', pathMatch: 'full' }
];
