import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSerPublicComponent } from './post-ser-public.component';

describe('PostSerPublicComponent', () => {
  let component: PostSerPublicComponent;
  let fixture: ComponentFixture<PostSerPublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSerPublicComponent]
    });
    fixture = TestBed.createComponent(PostSerPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
