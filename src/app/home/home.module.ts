import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { HomeRoutingModule } from './home-routing.module';
import { PostCardComponent } from './post-card/post-card.component';
import { PostTextareaComponent } from './post-textarea/post-textarea.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    PostCardComponent,
    PostsComponent,
    PostTextareaComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
