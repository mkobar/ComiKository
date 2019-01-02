import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IComic } from './comics.model';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ComicsService {
  constructor(private http: HttpClient) {}

  public deleteComic(id: number) {
    this.http.delete('/lib/comics/' + id)
    .pipe(catchError(this.handleError<IComic[]>('getComics'[1])))
    .subscribe();
  }

  public getComics(): Observable<IComic[]> {
    return this.http
      .get<IComic[]>('/lib/comics')
      .pipe(catchError(this.handleError<IComic[]>('getComics'[1])));
  }

  public getComic(id: number): Observable<IComic> {
    return this.http
      .get<IComic>('/lib/comics/' + id)
      .pipe(catchError(this.handleError<IComic>('getComic')));
  }

  saveComic(comic) {
    console.log('saveEvent start');
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<IComic>('/lib/comics/', comic, options)
      .pipe(catchError(this.handleError<IComic>('saveEvent')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
