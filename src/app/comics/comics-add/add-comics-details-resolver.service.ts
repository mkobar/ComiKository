import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { AddComicService } from '../shared/comics-add-comic.service';

@Injectable()
export class AddComicDetailsResolver implements Resolve<any> {
  constructor(private addComicService: AddComicService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.addComicService.getComicById(route.params['id']);
  }
}
