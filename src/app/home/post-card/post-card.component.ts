import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Employee, PostToView } from 'src/app/models';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post: PostToView;


  @ViewChild('details', { static: false }) detailsTemplateRef: TemplateRef<any>;

  constructor(
    private postsService: PostsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }


  openEmployeeDetails(employee: Employee): void {
    this.dialog.open(this.detailsTemplateRef, { data: employee });
  }

  editPost(post: PostToView): void {
    post.editing = true;
  }

  cancelEdit(post: PostToView): void {
    post.editing = false;
  }
}
