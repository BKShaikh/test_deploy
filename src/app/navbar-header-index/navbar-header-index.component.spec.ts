import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHeaderIndexComponent } from './navbar-header-index.component';

describe('NavbarHeaderIndexComponent', () => {
  let component: NavbarHeaderIndexComponent;
  let fixture: ComponentFixture<NavbarHeaderIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarHeaderIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarHeaderIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
