import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css'],
})
export class ReactFormComponent implements OnInit {
  visible = false;
  rform! : FormGroup;
  ConfirmedValidator: any;
  constructor(private fb : FormBuilder) {}
  
  ngOnInit(): void {
      // this.rform = new FormGroup(
      //   {
      //     name: new FormControl('', [
      //       Validators.required,
      //       Validators.minLength(4),
      //     ]),
      //     password: new FormControl('', Validators.required),
      //     confirmPass: new FormControl('', Validators.required),
      //   },
      //   {
      //     // validator:ConfirmedValidator('password','confirmPass')
      //     validators: ConfirmedValidator('password', 'confirmPass')
      //   }
      // );

      this.rform = this.fb.group({
        name: ['',[Validators.required, Validators.minLength(4)]],
        password: ['', Validators.required],
        confirmPass: ['', Validators.required]
      },{
        validator: ConfirmedValidator('password','confirmPass')
      })
  }


  get f(){
    return this.rform.controls;
  }

  onsubmit(){
    console.warn(this.rform.value);
  }

  // get name(){
  //   return this.rform.get('name');
  // }


  // anatomy of custome validator function --------------------------------------------------

  // private funcName(controlNameA: string, controlNameB: string):ValidatorFn{
  //   return (arg: AbstractControl): ValidationErrors | null => {
  //     const formGroup = arg as FormGroup;

  //     const valuesOfControlA = formGroup.get('controlNameA')?.value;
  //     const valuesOfControlB = formGroup.get('controlNameB')?.value;

  //     if (controlNameA === controlNameB) {
  //       return null;
  //     } else {
  //       return { valuedDoNotMatch: true };
  //     }
  //   }
  // }
isFormShow(){
  return this.visible;
}

}
  



