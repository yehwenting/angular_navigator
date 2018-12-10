import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TMPageComponent } from './tm-page.component';

describe('TMPageComponent', () => {
  let component: TMPageComponent;
  let fixture: ComponentFixture<TMPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TMPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TMPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
