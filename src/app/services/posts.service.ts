import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models';

const INITIAL_DATA: Post[] = [
  { date: '12-01', text: 'alsdlamsdmsad' },
  { date: '13-02', text: 'asbsad' },
  { date: '14-12', text: 'afffsbsad' },
];

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }


  public list(): Observable<Post[]> {

    const stored = localStorage.getItem('valispace-challenge-posts');

    if (stored) {
      return of(JSON.parse(stored));
    }

    localStorage.setItem('valispace-challenge-posts', JSON.stringify(INITIAL_DATA));
    return of(INITIAL_DATA);
  }

  public add(post: Post): Observable<void> {
    return this.list().pipe(map(posts => {
      posts.push(post);
      localStorage.setItem('valispace-challenge-posts', JSON.stringify(posts));
    }));
  }

  public edit(): Observable<void> {
    return of();
  }

  public remove(): Observable<void> {
    return of();
  }
}
