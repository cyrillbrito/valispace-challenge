import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Employee, Post, PostToView } from '../../models';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: Observable<PostToView[]>;

  post = {} as Post;


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

}
