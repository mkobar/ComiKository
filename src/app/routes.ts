import { Routes } from '@angular/router';

import {
  ComicListResolver,
  ComicDetailsComponent,
  ComicsListComponent,
  ComicDetailsResolver,
  AddComicsComponent,
  AddComicDetailsComponent,
  AddComicDetailsResolver
} from './comics/index';

export const appRoutes: Routes = [
  {
    path: 'comics',
    component: ComicsListComponent,
    resolve: { comics: ComicListResolver }
  },
  {
    path: 'comics/:id',
    component: ComicDetailsComponent,
    resolve: { comic: ComicDetailsResolver }
  },
  {
    path: 'add/:id',
    component: AddComicDetailsComponent,
    resolve: { comic: AddComicDetailsResolver }
  },
  { path: 'add', component: AddComicsComponent },
  { path: '', redirectTo: '/comics', pathMatch: 'full' }
];
