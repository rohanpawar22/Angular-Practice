import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueThreeComponent } from './issue-three.component';

describe('IssueThreeComponent', () => {
  let component: IssueThreeComponent;
  let fixture: ComponentFixture<IssueThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
