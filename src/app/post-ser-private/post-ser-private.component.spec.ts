import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSerPrivateComponent } from './post-ser-private.component';

describe('PostSerPrivateComponent', () => {
  let component: PostSerPrivateComponent;
  let fixture: ComponentFixture<PostSerPrivateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSerPrivateComponent]
    });
    fixture = TestBed.createComponent(PostSerPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
