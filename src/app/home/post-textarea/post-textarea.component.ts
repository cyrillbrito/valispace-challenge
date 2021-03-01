import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Employee, Post } from 'src/app/models';
import { EmployeesService } from 'src/app/services/employees.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-textarea',
  templateUrl: './post-textarea.component.html',
  styleUrls: ['./post-textarea.component.css']
})
export class PostTextareaComponent implements OnInit {

  @Input() post: Post;

  employeesOptions$: Observable<Employee[]>;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  @ViewChild('area', { static: false }) area: ElementRef<HTMLTextAreaElement>;


  show = false;

  text: string;
  cursor: number
  success: boolean;

  toBe: string;

  constructor(
    private postsService: PostsService,
    private employeesService: EmployeesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.employeesOptions$ = this.employeesService.list();
  }

  test2(): void {
    console.log('show')
    this.show = true;

    this.text = this.area.nativeElement.value;
    this.cursor = this.area.nativeElement.selectionStart;
  }

  test4(event): void {

    console.log('close')

    if (!this.success) {
      this.myControl.setValue(this.text);
      this.area.nativeElement.value = this.text;
    }

    this.area.nativeElement.setSelectionRange(this.cursor, this.cursor);

    this.text = null;
    this.cursor = null;
    this.success = null;
    this.show = false;
  }

  test3(event: MatAutocompleteSelectedEvent): void {

    const prev = this.area.nativeElement.value;
    const curor = this.area.nativeElement.selectionStart;
    const eventa = event.option.value as string;

    console.log(prev, curor, eventa);

    this.toBe = this.text.slice(0, this.cursor) + '@' + eventa + this.text.slice(this.cursor);

    this.cursor += eventa.length + 1;

    console.log(event);

    this.myControl.setValue(this.toBe);
    this.area.nativeElement.value = this.toBe;
    // this.post.text = this.toBe;


    this.success = true;
    // alert('');
    // this.show = false;
  }

}
