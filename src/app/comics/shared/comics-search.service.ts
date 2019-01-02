import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IComic } from './comics.model';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicsSearchService {
  constructor(private httpClient: HttpClient) {}

  public getIssues(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term))
    );
  }

  public getComicToAdd(detailUrl: Observable<IComic>) {
    return this.httpClient
      .get(`${detailUrl}${environment.apiKey}&format=json`)
      .pipe(map(res => res));
  }

  private searchEntries(term) {
    return this.httpClient
      .get(
        `${environment.baseUrl}search/${environment.apiKey}${
          environment.parameters
        }${term}`
      )
      .pipe(map(res => res));
  }
}
