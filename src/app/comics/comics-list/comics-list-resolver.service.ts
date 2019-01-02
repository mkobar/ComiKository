import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ComicsService } from '../shared/comics-library.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ComicListResolver implements Resolve<any> {
  constructor(private comicsService: ComicsService) {}

  resolve() {
    return this.comicsService.getComics().pipe(map(comics => comics));
  }
}
