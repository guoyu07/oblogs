import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLoginLeftComponent } from './work-login-left.component';

describe('WorkLoginLeftComponent', () => {
  let component: WorkLoginLeftComponent;
  let fixture: ComponentFixture<WorkLoginLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkLoginLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkLoginLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
