import { Injectable } from '@angular/core';
import { IComic } from './comics.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddComicService {
  comics: IComic[] = new Array();

  public getComicById(id: number): Observable<IComic> {
    return of(this.comics.find(x => x.id == id));
  }

  public pushComic(comicToAdd: IComic) {
    this.comics.push(<IComic>comicToAdd);
  }
}
