import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormServiceApiInSymfonyComponent } from './dynamic-form-service-api-in-symfony.component';

describe('DynamicFormServiceApiInSymfonyComponent', () => {
  let component: DynamicFormServiceApiInSymfonyComponent;
  let fixture: ComponentFixture<DynamicFormServiceApiInSymfonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormServiceApiInSymfonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormServiceApiInSymfonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
