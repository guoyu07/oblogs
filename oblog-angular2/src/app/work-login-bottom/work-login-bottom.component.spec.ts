import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLoginBottomComponent } from './work-login-bottom.component';

describe('WorkLoginBottomComponent', () => {
  let component: WorkLoginBottomComponent;
  let fixture: ComponentFixture<WorkLoginBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkLoginBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkLoginBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
