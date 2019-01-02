import { Injectable } from '@angular/core';
import { IComic } from './comics.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddComicService {
  comics: IComic[] = new Array();

  public getComicById(id: number): Observable<IComic> {
    // this needs to return a proper type.
    return this.comics.find(x => x.id == id);
  }

  public pushComic(comicToAdd: IComic) {
    this.comics.push(<IComic>comicToAdd);
  }
}
