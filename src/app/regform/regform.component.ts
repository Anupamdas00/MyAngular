import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css'],
})
export class RegformComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      title: ['', Validators.required],
      firstname: ['', [Validators.required,Validators.pattern('^[A_Za-z]+$') ,Validators.minLength(4)]],
      lastname: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cPassword: ['',Validators.required],
      acceptTerm: [false],
    },
    {
      Validators: this.MustMatch('password','cPassword')
    });
  }

  get title() {
    return this.registerForm.get('title');
  }

  get fname() {
    return this.registerForm.get('firstname');
  }

  get lname() {
    return this.registerForm.get('lastname');
  }

  get dob(){
    return this.registerForm.get('dob');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get pass(){
    return this.registerForm.get('password');
  }

  get cpass(){
    return this.registerForm.get('cPassword');
  }

  MustMatch(pass : string, cPass : string){
    return ( formgroup : FormGroup) => {
      const control = formgroup.controls[pass];
      const matchingControl = formgroup.controls[cPass];
      
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        // return if another errors is found in matchingContol
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch : true})
      }else{
        matchingControl.setErrors(null);
      }
    }
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.submitted = true;
  }

  onReset() {
    this.registerForm.reset();
  }
}
