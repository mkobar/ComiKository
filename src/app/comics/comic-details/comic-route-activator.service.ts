import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ComicsService } from '../shared/comics-library.service';


@Injectable()
export class ComicsRouteActivator implements CanActivate {
  constructor(private comicService: ComicsService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const comicExists = !! this.comicService.getComic(+route.params['id']);

    if (!comicExists) {
      this.router.navigate(['/404']);
    }
    return comicExists;
  }
}
