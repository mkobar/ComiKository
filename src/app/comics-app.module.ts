import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

import {
  ComicsService,
  ComicsRouteActivator,
  ComicListResolver,
  ComicsTileComponent,
  ComicsListComponent,
  ComicDetailsComponent,
  AddComicsComponent,
} from './comics/index';


import { AppComponent } from './comics-app.component';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { ComicsSearchService } from './comics/shared/comics-search.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ComicsListComponent,
    ComicDetailsComponent,
    ComicsTileComponent,
    AddComicsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [ComicsService, ComicsRouteActivator, ComicListResolver, ComicsSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
