import { Component } from '@angular/core';
import { ComicsService } from '../shared/comics-library.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './comic-details.component.html',
    styleUrls: ['./comic-details.component.css', '../../../../node_modules/font-awesome/css/font-awesome.css']
})


export class ComicDetailsComponent {
  comic: any;
  constructor(private comicsService: ComicsService, private route: ActivatedRoute) {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
      this.comic = this.comicsService.getComic(+this.route.snapshot.params['id']);
  }
}
