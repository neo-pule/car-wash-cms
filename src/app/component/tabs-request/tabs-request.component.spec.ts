import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsRequestComponent } from './tabs-request.component';

describe('TabsRequestComponent', () => {
  let component: TabsRequestComponent;
  let fixture: ComponentFixture<TabsRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
