import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterStudentInfoComponent } from './register-student-info/register-student-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterStudentInfoWithFBComponent } from './register-student-info-with-fb/register-student-info-with-fb.component';
import { LoginComponentComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterStudentInfoComponent,
    RegisterStudentInfoWithFBComponent,
    LoginComponentComponent,
    RegisterStudentInfoWithFBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
