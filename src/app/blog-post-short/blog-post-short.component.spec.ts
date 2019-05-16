import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostShortComponent } from './blog-post-short.component';

describe('BlogPostShortComponent', () => {
  let component: BlogPostShortComponent;
  let fixture: ComponentFixture<BlogPostShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
