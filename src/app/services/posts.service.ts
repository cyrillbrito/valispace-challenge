import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee, Post, PostSegment } from '../models';
import { EmployeesService } from './employees.service';

const INITIAL_DATA: Post[] = [
  { id: 6, date: new Date(2021, 1, 26).toLocaleString(), text: '#4 is the best!' },
  { id: 5, date: new Date(2021, 1, 25).toLocaleString(), text: 'You can call #1 after the meeting.' },
  { id: 4, date: new Date(2021, 1, 24).toLocaleString(), text: 'Welcome to the company @1!!!' },
  { id: 3, date: new Date(2021, 1, 23).toLocaleString(), text: 'Thanks, @2, @3, @4' },
  { id: 2, date: new Date(2021, 1, 22).toLocaleString(), text: '@3 @2 @5' },
  { id: 1, date: new Date(2021, 1, 21).toLocaleString(), text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut tortor augue, commodo id commodo vitae, aliquam sit amet neque.Sed eu bibendum arcu.Suspendisse non tincidunt ligula.Praesent vel ipsum velit.Proin ante lacus, vulputate et accumsan sed, facilisis quis eros.Proin et imperdiet ipsum.Proin eget dictum lacus.Phasellus elementum eros eget urna faucibus luctus.Praesent ac sollicitudin nisi, at laoreet enim.Suspendisse potenti.Pellentesque efficitur tellus ac purus imperdiet luctus.Vestibulum id nulla ut est porta hendrerit.Aliquam pulvinar pretium diam at aliquam.' },
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

  public create(post: Post): Observable<void> {

    return forkJoin([
      this.list(),
      this.parsePostToSave(post)
    ]).pipe(map(results => {

      const [posts] = results;

      post.id = posts[posts.length - 1].id + 1;

      posts.unshift(post);
      localStorage.setItem('valispace-challenge-posts', JSON.stringify(posts));
    }));
  }

  public update(post: Post): Observable<void> {

    return forkJoin([
      this.list(),
      this.parsePostToSave(post)
    ]).pipe(map(results => {

      const [posts] = results;

      const index = posts.findIndex(p => p.id === post.id);
      posts[index] = post;

      localStorage.setItem('valispace-challenge-posts', JSON.stringify(posts));
    }));
  }

  private parsePostToSave(post: Post): Observable<void> {
    return this.employeesService.list().pipe(map(employees => {
      this.replaceUsernamesWithIds(post, employees);
      this.replacePhonesWithIds(post, employees);
    }));
  }

  private replaceUsernamesWithIds(post: Post, employees: Employee[]): void {
    const matches = post.text.match(/@[\w\-_]+/g);

    if (matches) {
      for (const match of matches) {
        const username = match.slice(1);
        const employee = employees.find(e => e.username === username);
        if (employee) {
          const index = post.text.indexOf(match);
          post.text = this.replaceStrInIndex(post.text, index + 1, employee.id, username.length);
        }
      }
    }
  }

  private replacePhonesWithIds(post: Post, employees: Employee[]): void {
    const matches = post.text.match(/#\d+/g);

    if (matches) {
      for (const match of matches) {
        const phone = match.slice(1);
        const employee = employees.find(e => e.phone.toString() === phone);
        if (employee) {
          const index = post.text.indexOf(match);
          post.text = this.replaceStrInIndex(post.text, index + 1, employee.id, phone.length);
        }
      }
    }
  }

  public getPostSegments(post: Post): Observable<PostSegment[]> {

    return this.employeesService.list().pipe(map(employees => {

      const segments: PostSegment[] = [];

      const regExp = /[@#]\d+/g;
      const matches = post.text.match(regExp);

      let lastIndex = 0;

      if (matches) {
        for (const match of matches) {
          const id = Number(match.slice(1));
          const employee = employees.find(e => e.id === id);
          if (employee) {
            const index = post.text.indexOf(match, lastIndex);
            if (lastIndex < index) {
              segments.push({ text: post.text.substr(lastIndex, index - lastIndex) });
            }
            const text = match[0] === '#' ? employee.phone.toString() : employee.username;
            segments.push({
              text: match[0] + text,
              employee
            });
            post.text = this.replaceStrInIndex(post.text, index + 1, text, match.length - 1);
            lastIndex = index + text.length + 1;
          }
        }
      }

      if (lastIndex < post.text.length) {
        segments.push({ text: post.text.substr(lastIndex, post.text.length - lastIndex) });
      }

      return segments;
    }));
  }

  private replaceStrInIndex(str: string, index: number, replacer: any, length: number): string {
    return str.slice(0, index) + replacer + str.slice(index + length);
  }

}
