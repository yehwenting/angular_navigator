import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcmPageComponent } from './ecm-page.component';

describe('EcmPageComponent', () => {
  let component: EcmPageComponent;
  let fixture: ComponentFixture<EcmPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcmPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
