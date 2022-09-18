import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-convert-temp',
  templateUrl: './convert-temp.component.html',
  styleUrls: ['./convert-temp.component.css'],
})
export class ConvertTempComponent implements OnInit {
  tempForm!: FormGroup;
  inputVal!: number;
  selectedTemp!: string;
  cel! : any;
  fah! : any;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.tempForm = this.fb.group({
      inputTemp: [],
      selectTemp: [],
    });
  }

  submit() {
    this.inputVal = this.tempForm.value.inputTemp;
    this.selectedTemp = this.tempForm.value.selectTemp;
    // this.tempForm.controls['cel'].setValue(this.f);
  }

  valueChangedF(arg: any) {
      if(arg){
        this.cel = Math.round(((arg - 32) * 5) / 9);
      }else{
        this.cel = "";
      } 
      
  }

  valueChangedC(arg: any){
    if(arg){
      this.fah = Math.round(((9/5)*arg) + 32);
    }else{
      this.fah = "";
    }
  }
}



