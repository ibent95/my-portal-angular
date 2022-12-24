import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsSliderComponent } from './app-slider.component';

describe('AppsSliderComponent', () => {
  let component: AppsSliderComponent;
  let fixture: ComponentFixture<AppsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
