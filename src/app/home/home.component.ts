import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit() {
    this.posts$ = this.postsService.list();

  }


}
