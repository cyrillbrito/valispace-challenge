import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTextareaComponent } from './post-textarea.component';

describe('PostTextareaComponent', () => {
  let component: PostTextareaComponent;
  let fixture: ComponentFixture<PostTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
