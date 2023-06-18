import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingOtherComponent } from './routing-other.component';

describe('RoutingOtherComponent', () => {
  let component: RoutingOtherComponent;
  let fixture: ComponentFixture<RoutingOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingOtherComponent]
    });
    fixture = TestBed.createComponent(RoutingOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
