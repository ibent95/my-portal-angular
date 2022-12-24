import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAppsSliderComponent } from './home-apps-slider.component';

describe('HomeAppsSliderComponent', () => {
  let component: HomeAppsSliderComponent;
  let fixture: ComponentFixture<HomeAppsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAppsSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAppsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
