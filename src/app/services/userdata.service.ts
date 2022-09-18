import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return [
      {name:"Anupam", age: 30, post: "Developer"},
      {name:"Bimal", age: 43, post: "Analyst"},
      {name:"Shilpa", age: 40, post: "Manager"},
    ]
  }
}
