import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormServiceApiInLumenComponent } from './dynamic-form-service-api-in-lumen.component';

describe('DynamicFormServiceApiInLumenComponent', () => {
  let component: DynamicFormServiceApiInLumenComponent;
  let fixture: ComponentFixture<DynamicFormServiceApiInLumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormServiceApiInLumenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormServiceApiInLumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
