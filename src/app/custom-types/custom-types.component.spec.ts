import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTypesComponent } from './custom-types.component';

describe('CustomTypesComponent', () => {
  let component: CustomTypesComponent;
  let fixture: ComponentFixture<CustomTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
