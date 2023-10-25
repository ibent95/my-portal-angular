import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormServiceApiInSpringbootComponent } from './dynamic-form-service-api-in-springboot.component';

describe('DynamicFormServiceApiInSpringbootComponent', () => {
  let component: DynamicFormServiceApiInSpringbootComponent;
  let fixture: ComponentFixture<DynamicFormServiceApiInSpringbootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormServiceApiInSpringbootComponent]
    });
    fixture = TestBed.createComponent(DynamicFormServiceApiInSpringbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
