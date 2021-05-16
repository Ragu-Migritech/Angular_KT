import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-student-info-with-fb',
  templateUrl: './register-student-info-with-fb.component.html',
  styleUrls: ['./register-student-info-with-fb.component.css']
})
export class RegisterStudentInfoWithFBComponent implements OnInit {

  studentInfoForm = this.fb.group({
    firstName: ['', [Validators.required, 
      Validators.minLength(5), 
      Validators.maxLength(10), 
      this.shouldNotBeNumber(/\D/g)]],
    lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    age: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    address: this.fb.group({
      street: [''],
      city : [''],
      state: [''],
      pincode: ['']
    })
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Form Builder:"+JSON.stringify(this.studentInfoForm.value));
    let firstName = this.studentInfoForm.get('firstName').value;
    this.studentInfoForm.get('firstName').setValue(firstName.toUpperCase());
    //Saving to DB
    this.studentInfoForm.patchValue({
      firstName: 'Migri',
      lastName: 'Tech',
      age:'',
      address: {
        street: '',
        city: '',
        state: '',
        pincode: ''
      }
    });
    // console.log("First Name:"+ JSON.stringify(this.firstName.value));
    // console.log("Last Name:"+ JSON.stringify(this.lastName.value));
    //Saving Student INfo to DB
    //clearning student info form
    // this.clearStudentForm();

    //IN-build Validators: 
    //required
    //minLength
    //maxLength
    //
  }

  get firstName() {
    return this.studentInfoForm.get('firstName');
  }

  shouldNotBeNumber(firstNameReg: RegExp){
    return (control) =>{
      let isNotNumberic = true;
      let firstName = control.value;
      for(let i =0; i<firstName.length; i++){
        if(parseInt(firstName[i]) < 65 || parseInt(firstName[i]) > 122){
          isNotNumberic = false;
          break;
        }
      }
      console.log("isNotNumberic :"+ isNotNumberic);
      return isNotNumberic ? null: { shouldNotBeNumber: { value : control.value} };
    }
  }
}
