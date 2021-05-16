import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStudentInfoWithFBComponent } from './register-student-info-with-fb.component';

describe('RegisterStudentInfoWithFBComponent', () => {
  let component: RegisterStudentInfoWithFBComponent;
  let fixture: ComponentFixture<RegisterStudentInfoWithFBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStudentInfoWithFBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStudentInfoWithFBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
