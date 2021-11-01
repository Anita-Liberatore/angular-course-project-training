import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIntroductionComponent } from './service-introduction.component';

describe('ServiceIntroductionComponent', () => {
  let component: ServiceIntroductionComponent;
  let fixture: ComponentFixture<ServiceIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
