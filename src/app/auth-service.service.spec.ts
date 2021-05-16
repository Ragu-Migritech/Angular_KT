import { TestBed } from '@angular/core/testing';

import { AuthServiceService } from './auth-service.service';

describe('AuthServiceService', () => {
  let service: AuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServiceService);
  });

  afterEach(()=>{
    localStorage.removeItem('token');
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return false from isAuthenticated when there is not token stored in local storage', ()=>{
    expect(service.isAuthenticated()).toBeFalsy();
  });

  it('should return true from isAuthenticated when there was a token in local storage', ()=>{
    localStorage.setItem('token', 'Ragu');
    expect(service.isAuthenticated()).toBeTruthy();
  });

  

});
