import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTowComponent } from './home-tow.component';

describe('HomeTowComponent', () => {
  let component: HomeTowComponent;
  let fixture: ComponentFixture<HomeTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
