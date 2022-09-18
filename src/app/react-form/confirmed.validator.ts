import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ConfirmedValidator(p1:string, p2 :string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[p1];
        const controlName = formGroup.controls[p2];

        if (controlName.errors && !controlName.errors['confirmedValidator']) {
          return;
        }

        if(control.value !== controlName.value){
            controlName.setErrors({confirmedValidator : true});
        }else{
            controlName.setErrors(null);
        }
    }
  } 
// 

// export function ConfirmedValidator(p1: string, p2: string): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const formGroup = control as FormGroup;
//     const valuesOfP1 = formGroup.get('')?.value
//     const valuesOfP2 = formGroup.get('')?.value;
    
//     if (valuesOfP1 === valuesOfP2) {
//       return null;
//     } else {
//       return { valuesDoNotMatch: true }
//     }
//   };
// }

