import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import {
  ComicsService,
  AddComicsTileComponent,
  ComicDetailsResolver,
  ComicListResolver,
  ComicsTileComponent,
  ComicsListComponent,
  ComicDetailsComponent,
  AddComicsComponent,
  AddComicDetailsComponent
} from './comics/index';

import { AppComponent } from './comics-app.component';
import { appRoutes } from './routes';
import { NavBarComponent } from './nav/navbar.component';
import { FormsModule } from '@angular/forms';
import { AddComicDetailsResolver } from './comics/comics-add/add-comics-details-resolver.service';
import { AddComicService } from './comics/shared/comics-add-comic.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ComicsListComponent,
    ComicDetailsComponent,
    ComicsTileComponent,
    AddComicsComponent,
    AddComicsTileComponent,
    AddComicDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    ComicsService,
    ComicDetailsResolver,
    ComicListResolver,
    AddComicService,
    AddComicDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
