import { Component, OnInit } from '@angular/core';
import { ComicsSearchService } from '../shared/comics-search.service';
import { FormControl } from '@angular/forms';
import { IComic } from '../shared/comics.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-comics',
  templateUrl: './add-comics-list.component.html',
  styleUrls: ['./add-comics-list.component.css']
})
export class AddComicsComponent implements OnInit {
  search = new FormControl('', undefined);
  foundComics: IComic[];
  isDirty = true;

  results: Array<any>;
  searchTerm = new Subject<string>();

  constructor(
    private comicsSearchService: ComicsSearchService
  ) {}

  ngOnInit() {
    this.comicsSearchService.getIssues(this.searchTerm).subscribe((comics: IComic[]) => {
      this.results = comics.results;
      this.foundComics = this.results;
    });
  }

  public doSearch(searchTerm: Subject<string> ) {
    this.comicsSearchService
      .getIssues(searchTerm)
      .subscribe((comics: IComic[]) => {
        this.foundComics = comics;
      });
  }
}
