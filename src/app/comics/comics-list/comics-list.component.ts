import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComic } from '../shared/comics.model';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {
  comics: IComic[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.comics = this.route.snapshot.data['comics'];
  }
}
