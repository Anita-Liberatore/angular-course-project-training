import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLibraryComponent } from './css-library.component';

describe('CssLibraryComponent', () => {
  let component: CssLibraryComponent;
  let fixture: ComponentFixture<CssLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
