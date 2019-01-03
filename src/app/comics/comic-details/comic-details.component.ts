import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IComic } from '../shared/comics.model';
import { ComicsService } from '../shared/comics-library.service';

@Component({
  templateUrl: './comic-details.component.html',
  styleUrls: [
    './comic-details.component.css',
    '../../../../node_modules/font-awesome/css/font-awesome.css'
  ]
})
export class ComicDetailsComponent implements OnInit {
  comic: IComic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private comicsService: ComicsService
  ) {}

  ngOnInit() {
    this.route.data.forEach(data => {
      this.comic = data['comic'];
    });
  }

  private deleteComic() {
    this.comicsService.deleteComic(this.comic.id);
    setTimeout(() => {
      this.router.navigate(['/comics']);
    }, 100);
  }
}
