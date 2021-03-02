import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Post } from '../../models';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;

  post = {} as Post;

  constructor(
    private postsService: PostsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.posts$ = this.postsService.list();
  }

  createPost(): void {
    this.post.date = new Date().toLocaleString();
    this.postsService.create(this.post).subscribe(() => {
      this.post = {} as Post;
      this.posts$ = this.postsService.list();
    });
  }

}
