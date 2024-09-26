import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlertsPageComponent } from './admin-alerts-page.component';

describe('AdminAlertsPageComponent', () => {
  let component: AdminAlertsPageComponent;
  let fixture: ComponentFixture<AdminAlertsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAlertsPageComponent]
    });
    fixture = TestBed.createComponent(AdminAlertsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
