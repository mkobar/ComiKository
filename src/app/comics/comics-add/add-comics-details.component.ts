import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComic } from '../shared/comics.model';
import { ComicsService } from '../shared/comics-library.service';

@Component({
  templateUrl: './add-comics-details.component.html',
  styleUrls: [
    './add-comics-details.component.css',
    '../../../../node_modules/font-awesome/css/font-awesome.css'
  ]
})
export class AddComicDetailsComponent implements OnInit {
  @Input() comic: IComic;

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

  public saveComic() {
    this.comicsService.saveComic(this.comic).subscribe(() => {
      this.router.navigate(['/comics']);
    });
  }
}
