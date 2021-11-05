import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTypeObjectComponent } from './ng-for-type-object.component';

describe('NgForTypeObjectComponent', () => {
  let component: NgForTypeObjectComponent;
  let fixture: ComponentFixture<NgForTypeObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForTypeObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForTypeObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
