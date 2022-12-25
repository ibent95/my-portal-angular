import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesApisComponent } from './services-apis.component';

describe('ServicesApisComponent', () => {
  let component: ServicesApisComponent;
  let fixture: ComponentFixture<ServicesApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesApisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
