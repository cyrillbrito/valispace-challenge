import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Employee, Post, PostSegment } from 'src/app/models';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post: Post;

  @ViewChild('details', { static: false }) detailsTemplateRef: TemplateRef<any>;

  public segments: PostSegment[];
  public editing: boolean;

  private original: string;

  constructor(
    private postsService: PostsService,
    public dialog: MatDialog,
  ) { }

  public ngOnInit() {
    this.segments = this.postsService.getPostSegments(this.post);
  }

  public openEmployeeDetails(employee: Employee): void {
    this.dialog.open(this.detailsTemplateRef, { data: employee });
  }

  public editPost(post: Post): void {
    this.editing = true;
    this.original = post.text;
  }

  public cancelEdit(post: Post): void {
    post.text = this.original;
    this.editing = false;
  }

  public update(): void {
    this.postsService.update(this.post).subscribe(() => {
      this.segments = this.postsService.getPostSegments(this.post);
      this.editing = false;
    });
  }
}
