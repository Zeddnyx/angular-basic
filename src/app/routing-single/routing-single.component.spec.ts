import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSingleComponent } from './routing-single.component';

describe('RoutingSingleComponent', () => {
  let component: RoutingSingleComponent;
  let fixture: ComponentFixture<RoutingSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingSingleComponent]
    });
    fixture = TestBed.createComponent(RoutingSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
