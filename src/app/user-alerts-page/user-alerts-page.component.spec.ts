import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlertsPageComponent } from './user-alerts-page.component';

describe('UserAlertsPageComponent', () => {
  let component: UserAlertsPageComponent;
  let fixture: ComponentFixture<UserAlertsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAlertsPageComponent]
    });
    fixture = TestBed.createComponent(UserAlertsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
