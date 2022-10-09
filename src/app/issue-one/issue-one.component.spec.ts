import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueOneComponent } from './issue-one.component';

describe('IssueOneComponent', () => {
  let component: IssueOneComponent;
  let fixture: ComponentFixture<IssueOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
