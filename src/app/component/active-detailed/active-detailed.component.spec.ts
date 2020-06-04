import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDetailedComponent } from './active-detailed.component';

describe('ActiveDetailedComponent', () => {
  let component: ActiveDetailedComponent;
  let fixture: ComponentFixture<ActiveDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
