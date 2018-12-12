import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitApprovalComponent } from './submit-approval.component';

describe('SubmitApprovalComponent', () => {
  let component: SubmitApprovalComponent;
  let fixture: ComponentFixture<SubmitApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
