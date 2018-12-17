import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComicsSearchService } from '../shared/comics-search.service';

@Component({
  selector: 'app-add-comics',
  templateUrl: './add-comics.component.html',
  styleUrls: ['./add-comics.component.css']
})
export class AddComicsComponent implements OnInit {
  isDirty = true;
  constructor(
    private comicsSearchService: ComicsSearchService,
    private router: Router
  ) {}
  cancel() {
    this.router.navigate(['/comics']);
  }

  ngOnInit() {
    // dummy parameter
    this.comicsSearchService.getComicsFromTheVine('spider man');
  }
}
