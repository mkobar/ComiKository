import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ComicsService } from '../shared/comics-library.service';

@Injectable()
export class ComicDetailsResolver implements Resolve<any> {
  constructor(private comicsService: ComicsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.comicsService.getComic(route.params['id']);
  }
}
