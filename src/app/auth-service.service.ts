import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isAuthenticated(): Boolean {
    return !!localStorage.getItem('token');
  }

  setAuthentication(): void{
    localStorage.setItem('token','Ragu');
  }
}
