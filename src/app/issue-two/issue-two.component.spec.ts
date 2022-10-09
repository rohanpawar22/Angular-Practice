import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTwoComponent } from './issue-two.component';

describe('IssueTwoComponent', () => {
  let component: IssueTwoComponent;
  let fixture: ComponentFixture<IssueTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
