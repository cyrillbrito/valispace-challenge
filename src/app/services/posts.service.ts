import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee, Post, PostSegment } from '../models';
import { EmployeesService } from './employees.service';

const INITIAL_DATA: Post[] = [
  { id: 4, date: new Date(2021, 2, 4).toLocaleString(), text: 'Welcome to the company @1!!!' },
  { id: 3, date: new Date(2021, 2, 3).toLocaleString(), text: 'Thanks, @2, @3, @4' },
  { id: 2, date: new Date(2021, 2, 2).toLocaleString(), text: '@3 @2 @5' },
  { id: 1, date: new Date(2021, 2, 1).toLocaleString(), text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut tortor augue, commodo id commodo vitae, aliquam sit amet neque.Sed eu bibendum arcu.Suspendisse non tincidunt ligula.Praesent vel ipsum velit.Proin ante lacus, vulputate et accumsan sed, facilisis quis eros.Proin et imperdiet ipsum.Proin eget dictum lacus.Phasellus elementum eros eget urna faucibus luctus.Praesent ac sollicitudin nisi, at laoreet enim.Suspendisse potenti.Pellentesque efficitur tellus ac purus imperdiet luctus.Vestibulum id nulla ut est porta hendrerit.Aliquam pulvinar pretium diam at aliquam.' },
];

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private employees: Employee[];

  constructor(
    private employeesService: EmployeesService,
  ) {
    this.employeesService.list().subscribe(employees => this.employees = employees);
  }


  public list(): Observable<Post[]> {

    const stored = localStorage.getItem('valispace-challenge-posts');

    if (stored) {
      return of(JSON.parse(stored));
    }

    localStorage.setItem('valispace-challenge-posts', JSON.stringify(INITIAL_DATA));
    return of(INITIAL_DATA);
  }

  public create(post: Post): Observable<void> {

    return this.list().pipe(map(posts => {

      post.id = posts[posts.length - 1].id + 1;
      this.parsePostToSave(post);

      posts.unshift(post);
      localStorage.setItem('valispace-challenge-posts', JSON.stringify(posts));
    }));
  }

  public update(post: Post): Observable<void> {

    return this.list().pipe(map(posts => {

      const index = posts.findIndex(p => p.id === post.id);
      posts[index] = post;

      this.parsePostToSave(post);
      localStorage.setItem('valispace-challenge-posts', JSON.stringify(posts));
    }));
  }

  private parsePostToSave(post: Post): Post {

    const regExp = /@[\w\-_]+/gi;
    const matches = post.text.match(regExp);

    if (matches) {
      for (const match of matches) {
        const username = match.slice(1);
        const employee = this.employees.find(e => e.username === username);
        if (employee) {
          const index = post.text.indexOf(match);
          post.text = this.replaceInIndex(post.text, index + 1, employee.id, username.length);
        }
      }
    }

    return post;
  }

  public getPostSegments(post: Post): PostSegment[] {

    const segments: PostSegment[] = [];

    const regExp = /@\d+/g;
    const matches = post.text.match(regExp);

    let lastIndex = 0;

    if (matches) {
      for (const match of matches) {
        const id = Number(match.slice(1));
        const employee = this.employees.find(e => e.id === id);
        if (employee) {
          const index = post.text.indexOf(match, lastIndex);
          if (lastIndex < index) {
            segments.push({ text: post.text.substr(lastIndex, index - lastIndex) });
          }
          segments.push({ text: '@' + employee.username, employee });
          post.text = this.replaceInIndex(post.text, index + 1, employee.username, match.length - 1);
          lastIndex = index + employee.username.length + 1;
        }
      }
    }

    if (lastIndex < post.text.length) {
      segments.push({ text: post.text.substr(lastIndex, post.text.length - lastIndex) });
    }

    return segments;
  }

  private replaceInIndex(str: string, index: number, replacer: any, length: number): string {
    return str.slice(0, index) + replacer + str.slice(index + length);
  }

}
