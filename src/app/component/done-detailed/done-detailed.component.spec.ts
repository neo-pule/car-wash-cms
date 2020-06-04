import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneDetailedComponent } from './done-detailed.component';

describe('DoneDetailedComponent', () => {
  let component: DoneDetailedComponent;
  let fixture: ComponentFixture<DoneDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
