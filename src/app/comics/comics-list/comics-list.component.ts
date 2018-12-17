import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../shared/comics-library.service';
import { ActivatedRoute } from '@angular/router';
import { IComic } from '../shared/comics.model';


@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})

export class ComicsListComponent implements OnInit {
    comics: IComic[];

    constructor(private comicsService: ComicsService, private route: ActivatedRoute) {

    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        /* this.comicsService.getComics().subscribe( comics => { this.comics = comics; }); */
        this.comics = this.route.snapshot.data['comics'];
    }

/*     handleThumbnailClick(comicName) {
        this.toastr.success(comicName);
    } */
}
