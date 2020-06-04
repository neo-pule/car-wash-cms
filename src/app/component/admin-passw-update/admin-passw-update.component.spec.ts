import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPasswUpdateComponent } from './admin-passw-update.component';

describe('AdminPasswUpdateComponent', () => {
  let component: AdminPasswUpdateComponent;
  let fixture: ComponentFixture<AdminPasswUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPasswUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPasswUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
