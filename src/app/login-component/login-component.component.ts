import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private auth: AuthServiceService) { }

  ngOnInit(): void {
    // this.auth.setAuthentication();
  }

  needsLogin(): Boolean {
    return !this.auth.isAuthenticated();
  }

}
