import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from '../model/student';

@Component({
  selector: 'app-register-student-info',
  templateUrl: './register-student-info.component.html',
  styleUrls: ['./register-student-info.component.css']
})
export class RegisterStudentInfoComponent implements OnInit {

  studentInfoForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    age: new FormControl(''),
    address : new FormGroup({
      street : new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl('')
    })
  })

  studentInfo : Student;

  constructor() { }

  ngOnInit(): void {
    this.studentInfoForm.valueChanges.subscribe(values =>{
      console.log("StudentInfo Value Changes: "+ JSON.stringify(values));
      let firstName = this.studentInfoForm.get('firstName').value;
      if(firstName != firstName.toUpperCase()){
        this.studentInfoForm.get('firstName').setValue(firstName.toUpperCase());
      }
    })
  }

  onSubmit() {
    console.log("Form Group:"+JSON.stringify(this.studentInfoForm.value));
    this.studentInfo = this.studentInfoForm.value;
    console.log("studentInfo :"+ JSON.stringify(this.studentInfo));
    console.log("Student First Name:"+ this.studentInfo.firstName);
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
  }

  clearStudentForm() {
    // this.firstName.setValue(null);
    // this.lastName.setValue(null);
  }
}
