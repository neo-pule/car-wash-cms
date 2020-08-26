import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumChartComponent } from './colum-chart.component';

describe('ColumChartComponent', () => {
  let component: ColumChartComponent;
  let fixture: ComponentFixture<ColumChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
