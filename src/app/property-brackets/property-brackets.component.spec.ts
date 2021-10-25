import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBracketsComponent } from './property-brackets.component';

describe('PropertyBracketsComponent', () => {
  let component: PropertyBracketsComponent;
  let fixture: ComponentFixture<PropertyBracketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBracketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
