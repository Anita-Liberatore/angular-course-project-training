import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesComponentsComponent } from './styles-components.component';

describe('StylesComponentsComponent', () => {
  let component: StylesComponentsComponent;
  let fixture: ComponentFixture<StylesComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylesComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
