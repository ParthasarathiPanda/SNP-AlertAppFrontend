import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSignUpComponent } from './admin-sign-up.component';

describe('AdminSignUpComponent', () => {
  let component: AdminSignUpComponent;
  let fixture: ComponentFixture<AdminSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSignUpComponent]
    });
    fixture = TestBed.createComponent(AdminSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
