import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClientListPageComponent } from './user-client-list-page.component';

describe('UserClientListPageComponent', () => {
  let component: UserClientListPageComponent;
  let fixture: ComponentFixture<UserClientListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserClientListPageComponent]
    });
    fixture = TestBed.createComponent(UserClientListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
