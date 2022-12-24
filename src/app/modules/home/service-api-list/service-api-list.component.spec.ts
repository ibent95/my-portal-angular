import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAPIListComponent } from './service-api-list.component';

describe('ServiceAPIListComponent', () => {
  let component: ServiceAPIListComponent;
  let fixture: ComponentFixture<ServiceAPIListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAPIListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceAPIListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
