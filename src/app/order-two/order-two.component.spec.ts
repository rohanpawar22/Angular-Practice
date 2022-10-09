import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTwoComponent } from './order-two.component';

describe('OrderTwoComponent', () => {
  let component: OrderTwoComponent;
  let fixture: ComponentFixture<OrderTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
