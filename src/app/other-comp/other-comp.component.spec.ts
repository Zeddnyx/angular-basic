import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCompComponent } from './other-comp.component';

describe('OtherCompComponent', () => {
  let component: OtherCompComponent;
  let fixture: ComponentFixture<OtherCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherCompComponent]
    });
    fixture = TestBed.createComponent(OtherCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
