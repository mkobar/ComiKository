import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { IComic } from '../shared/comics.model';
import { AddComicService } from '../shared/comics-add-comic.service';

@Component({
  selector: 'app-add-comics-tile',
  templateUrl: './add-comics-tile.component.html',
  styleUrls: ['./add-comics-tile.component.css', '../../../Styles.css']
})
export class AddComicsTileComponent implements OnInit {
  @Input() comic: IComic;

  constructor(private addComicService: AddComicService) {}

  ngOnInit() {
    this.addComicService.pushComic(this.comic);
  }
}
