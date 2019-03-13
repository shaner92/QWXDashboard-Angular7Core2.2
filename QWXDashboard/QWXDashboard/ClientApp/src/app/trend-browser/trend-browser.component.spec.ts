import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendBrowserComponent } from './trend-browser.component';

describe('TrendBrowserComponent', () => {
  let component: TrendBrowserComponent;
  let fixture: ComponentFixture<TrendBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
