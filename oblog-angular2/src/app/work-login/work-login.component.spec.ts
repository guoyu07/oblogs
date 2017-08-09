import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLoginComponent } from './work-login.component';

describe('WorkLoginComponent', () => {
  let component: WorkLoginComponent;
  let fixture: ComponentFixture<WorkLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
