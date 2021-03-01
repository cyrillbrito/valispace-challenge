import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Employee, Post, PostToView } from '../models';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts$: Observable<PostToView[]>;

  post = {} as Post;

  @ViewChild('templateRef', { static: false }) tempRef: TemplateRef<any>;

  constructor(
    private postsService: PostsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.posts$ = this.postsService.listToView();
  }

  createPost(): void {
    this.post.date = new Date().toLocaleString();
    this.postsService.add(this.post).subscribe();
  }

  openEmployeeDetails(employee: Employee): void {
    this.dialog.open(this.tempRef, {
      data: employee
    });
  }

  editPost(post: PostToView): void {
    post.editing = true;
  }

  cancelEdit(post: PostToView): void {
    post.editing = false;
  }
}
