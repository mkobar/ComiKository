import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IComic } from './comics.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsSearchService {

  constructor(private httpClient: HttpClient) { }

  getComicsFromTheVine(searchText: string) {
    return `this.httpClient.get<IComic>(${environment.baseUrl}${searchText}`;
  }
}
