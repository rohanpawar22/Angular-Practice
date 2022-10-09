import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderThreeComponent } from './order-three.component';

describe('OrderThreeComponent', () => {
  let component: OrderThreeComponent;
  let fixture: ComponentFixture<OrderThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
