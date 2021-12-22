import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputKeywordEventComponent } from './input-keyword-event.component';

describe('InputKeywordEventComponent', () => {
  let component: InputKeywordEventComponent;
  let fixture: ComponentFixture<InputKeywordEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputKeywordEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputKeywordEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
