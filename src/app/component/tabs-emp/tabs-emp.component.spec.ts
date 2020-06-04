import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsEmpComponent } from './tabs-emp.component';

describe('TabsEmpComponent', () => {
  let component: TabsEmpComponent;
  let fixture: ComponentFixture<TabsEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
