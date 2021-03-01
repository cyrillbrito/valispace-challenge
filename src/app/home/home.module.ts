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
import { HomeComponent } from './home.component';
import { PostTextareaComponent } from './post-textarea/post-textarea.component';


@NgModule({
  declarations: [HomeComponent, PostTextareaComponent],
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
    // ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
