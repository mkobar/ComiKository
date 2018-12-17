import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ComicsService } from '../shared/comics-library.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ComicListResolver implements Resolve<any> {
    constructor(private comicsService: ComicsService) {

    }

    resolve() {
        /*Not a subscription. Returning the observable itself.*/
        return this.comicsService.getComics().pipe(map(comics => comics));
    }
}
