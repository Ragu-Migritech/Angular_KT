import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStudentInfoComponent } from './register-student-info.component';

describe('RegisterStudentInfoComponent', () => {
  let component: RegisterStudentInfoComponent;
  let fixture: ComponentFixture<RegisterStudentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStudentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
