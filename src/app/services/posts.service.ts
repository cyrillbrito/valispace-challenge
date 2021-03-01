import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Employee, Post, PostSegment, PostToView } from '../models';
import { EmployeesService } from './employees.service';

const INITIAL_DATA: Post[] = [
  { date: '12-01', text: 'alsdlamsdmsad' },
  { date: '13-02', text: 'asbsad' },
  { date: '14-12', text: 'afffsbsad' },
];

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private employeesService: EmployeesService,
  ) { }


  public list(): Observable<Post[]> {

    const stored = localStorage.getItem('valispace-challenge-posts');

    if (stored) {
      return of(JSON.parse(stored));
    }

    localStorage.setItem('valispace-challenge-posts', JSON.stringify(INITIAL_DATA));
    return of(INITIAL_DATA);
  }

  public listToView(): Observable<PostToView[]> {
    return forkJoin([this.employeesService.list(), this.list()])
      .pipe(map(results => results[1].map(post => this.parsePostToView(post, results[0]))));
  }

  public add(post: Post): Observable<void> {

    return forkJoin([this.employeesService.list(), this.list()]).pipe(map(results => {

      const [employees, posts] = results;

      this.parsePostToSave(post, employees);

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

  private parsePostToSave(post: Post, employees: Employee[]): Post {

    const r = /@[\w\-_]+/gi;
    const matches = post.text.match(r);

    // Repeat for each
    for (const match of matches) {
      const username = match.slice(1);
      const employee = employees.find(e => e.username === username);
      if (employee) {
        const index = post.text.indexOf(match);
        post.text = post.text.slice(0, index + 1) + employee.id + post.text.slice(index + 1 + username.length);
      }
    }

    return post;
  }

  private parsePostToView(post: Post, employees: Employee[]): PostToView {

    const segments: PostSegment[] = [];

    const r = /@\d+/g;
    const matches = post.text.match(r);

    let lastIndex = 0;

    // Repeat for each
    if (matches) {
      for (const match of matches) {
        const id = Number(match.slice(1));
        const employee = employees.find(e => e.id === id);
        if (employee) {
          const index = post.text.indexOf(match, lastIndex);
          if (lastIndex < index) {
            segments.push({ text: post.text.substr(lastIndex, index - lastIndex) });
          }
          segments.push({ text: '@' + employee.username, employee });
          lastIndex = index + match.length;
        }
      }
    }

    if (lastIndex < post.text.length) {
      segments.push({ text: post.text.substr(lastIndex, post.text.length - lastIndex) });
    }

    return { date: post.date, segments };

  }

  private parsePostToEdit(): void {

  }
}
