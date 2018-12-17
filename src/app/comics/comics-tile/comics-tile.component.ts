import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IComic } from '../shared/comics.model';

@Component({
  selector: 'app-comics-tile',
  templateUrl: './comics-tile.component.html',
  styleUrls: ['./comics-tile.component.css']
})
export class ComicsTileComponent {
  @Input() comic: IComic;
  @Output() comicClick = new EventEmitter();

  handleClickMe() {
    this.comicClick.emit(this.comic.name);
  }
}
