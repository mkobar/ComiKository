import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { IComic } from './comics.model';

@Injectable()
export class ComicsService {
  getComics(): Observable<IComic[]> {
    const subject = new Subject<IComic[]>();
    // hack
    setTimeout(() => {
      subject.next(Comics);
      subject.complete();
    }, 0);
    return subject;
  }

  getComic(id: number) {
    return Comics.find(comic => comic.id === id);
  }
}

const Comics: IComic[] = [
  {
    name: 'Image Firsts: The Walking Dead',
    id: 32361,
    description:
      `This issue is a reprint of the now classic Walking Dead #1.
      It was part of a company wide reprint of 10 of their most popular titles.
      It was issued for Free Comic Book Day in 2010.`,
    thumb_url: 'https://comicvine.gamespot.com/api/image/scale_avatar/4092836-01.jpg',
    screen_url: 'https://comicvine.gamespot.com/api/image/screen_medium/4092836-01.jpg',
    start_year: '2010'
  },
  {
    name: 'Gil Kane Amazing Spider Man Artist\'s Edition',
    id: 378922,
    description: '<p>Hardcover.</p>',
    thumb_url: 'https://comicvine.gamespot.com/api/image/scale_avatar/2798081-01.jpg',
    screen_url: 'https://comicvine.gamespot.com/api/image/screen_medium/2798081-01.jpg',
    start_year: '2013'
    }

];
