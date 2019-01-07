import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IComic } from './comics.model';
import { catchError } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ComicsService {
  constructor(private http: HttpClient) {}

  public deleteComic(id: number) {
    this.http
      .delete(`${environment.baseUrl}/lib/comics/` + id)
      .pipe(catchError(this.handleError<IComic[]>('getComics'[1])))
      .subscribe();
  }

  public getComics(): Observable<IComic[]> {
    return this.http
      .get<IComic[]>(`${environment.baseUrl}/lib/comics`)
      .pipe(catchError(this.handleError<IComic[]>('getComics'[1])));
  }

  public getComic(id: number): Observable<IComic> {
    return this.http
      .get<IComic>(`${environment.baseUrl}/lib/comics/` + id)
      .pipe(catchError(this.handleError<IComic>('getComic')));
  }

  public saveComic(comic) {
    console.log('saveEvent start');
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .post<IComic>(`${environment.baseUrl}/lib/comics/`, comic, options)
      .pipe(catchError(this.handleError<IComic>('saveEvent')));
  }

  public getIssues(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term))
    );
  }

  private searchEntries(term) {
    console.log('term: ' + term);
    return this.http.get(`${environment.baseUrl}/lib/add/` + term).pipe(map(res => res));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
