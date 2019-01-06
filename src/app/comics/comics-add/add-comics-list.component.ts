import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IComic } from '../shared/comics.model';
import { Subject } from 'rxjs';
import { ComicsService } from '../shared/comics-library.service';

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

  constructor(private comicsService: ComicsService) {}

  ngOnInit() {
    console.log('add-comics-list, ngOnInit');
    this.comicsService
      .getIssues(this.searchTerm)
      .subscribe((comics: IComic[]) => {
        this.results = comics;
        this.foundComics = this.results;
      });
  }
}
