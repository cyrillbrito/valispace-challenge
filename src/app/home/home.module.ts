import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
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
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
