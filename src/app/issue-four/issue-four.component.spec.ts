import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueFourComponent } from './issue-four.component';

describe('IssueFourComponent', () => {
  let component: IssueFourComponent;
  let fixture: ComponentFixture<IssueFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
