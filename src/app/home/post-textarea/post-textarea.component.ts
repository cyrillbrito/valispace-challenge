import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { Employee, Post } from 'src/app/models';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-post-textarea',
  templateUrl: './post-textarea.component.html',
  styleUrls: ['./post-textarea.component.css']
})
export class PostTextareaComponent implements OnInit {

  @Input() post: Post;

  @ViewChild('textarea', { static: false }) textarea: ElementRef<HTMLTextAreaElement>;

  public employees$: Observable<Employee[]>;
  public show: boolean;

  private original: string;
  private cursor: number;
  private success: boolean;

  constructor(
    private employeesService: EmployeesService,
  ) { }

  ngOnInit() {
    this.employees$ = this.employeesService.list();
  }

  open(): void {
    this.show = true;

    this.original = this.post.text;
    this.cursor = this.textarea.nativeElement.selectionStart;
  }

  optionSelected(event: MatAutocompleteSelectedEvent): void {
    const selected = event.option.value;
    this.post.text = this.original.slice(0, this.cursor) + '@' + selected + this.original.slice(this.cursor);
    this.success = true;
  }

  close(): void {

    if (!this.success) {
      this.post.text = this.original;
    }

    this.textarea.nativeElement.setSelectionRange(this.cursor, this.cursor);

    this.success = false;
    this.show = false;
  }
}
