import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { AuthServiceService } from '../auth-service.service';

import { LoginComponentComponent } from './login-component.component';

describe('LoginComponentComponent', () => {
  let component: LoginComponentComponent;
  let fixture: ComponentFixture<LoginComponentComponent>;

  let authService: AuthServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponentComponent ]
    })
    .compileComponents();

    authService = new AuthServiceService();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return true from needsLogin when user has not been authenticated', ()=>{
    expect(component.needsLogin()).toBeTruthy();
  })

  it('Should return false from needsLogin when user has been authenticated', ()=>{
    localStorage.setItem('token', 'ragu1234');
    expect(component.needsLogin()).toBeFalsy();
  })

  it('Should display Login button in view when user not authenticated', ()=>{
    let element = fixture.debugElement.query(By.css('#loginButton'));
    expect(element.nativeElement.disabled).toBeFalsy();
    expect(element.nativeElement.textContent).toEqual('Login');
  })

  it('Should not display Login button in view when user not authenticated', ()=>{
    let element = fixture.debugElement.query(By.css('#loginButton'));
    expect(element.nativeElement.disabled).toBeFalsy();
    authService.setAuthentication();
    fixture.detectChanges();
    element = fixture.debugElement.query(By.css('#loginButton'));
    expect(element.nativeElement.autofocus).toBeTruthy();
  })

  afterEach(()=>{
    localStorage.removeItem('token');
  })

});
