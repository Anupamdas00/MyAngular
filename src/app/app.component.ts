import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Form } from '@angular/forms';
import { UserdataService } from './services/userdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // users: any
  // constructor(private userData: UserdataService){
  //   console.log(userData.users());
  //   this.users= userData.users();
  // }
  title = 'firstApp';

  constructor(
    // private viewCon: ViewContainerRef,
    // private comFacRes: ComponentFactoryResolver
  ) {}

  // async loadFood(){
  //   this.viewCon.clear();
  //   const {FoodsComponent} = await import("./foods/foods.component");
  //   this.viewCon.createComponent(
  //     this.comFacRes.resolveComponentFactory(FoodsComponent)
  //   )
  // }

  // async loadCust(){
  //   this.viewCon.clear();
  //   const {CustomersComponent} = await import("./customers/customers.component");
  //   this.viewCon.createComponent(
  //     this.comFacRes.resolveComponentFactory(CustomersComponent)
  //   )
  // }



  // str: string = 'have a great day';

  // <!-- events----------------------------- -->
  // getData(data:any){
  //   console.log(data);
  // }

  // <!-- print input value on page -->
  // inputVal = ''
  // getData(data: any) {
  //   console.log(data);
  //   this.inputVal = data
  // }
  // <!-- make a counter button and count------------ -->
  // count = 0
  // counter(type:string){
  //   type === 'add'?this.count++:this.count--
  // }
  // <!-- property binding------------------ -->
  // name:string = 'Anupam'
  // disable = true;
  // property binding disabled by interpolation did not disabled while disable = false because interpolation can not understand the boolean value

  // if else condition-------------------------------
  // public show:boolean = false
  // public buttonName:any = "make true"
  // change(){
  //   this.show = !this.show

  //   if(this.show){
  //     this.buttonName = "make false"
  //   }else{
  //     this.buttonName = "make true"
  //   }
  // }

  // <!-- else if condition------------------ -->
  // color = 'green';
  // color = 'blue';

  // <!-- switch case------------------- -->
  // color = 'orangee';

  // <!-- for loop------------------------ -->
  // userdetails = [
  //   {name:"Anupam", email:"das@gmail.com",phone:'8484'},
  //   {name:"Param", email:"param@gmail.com",phone:'3453'},
  //   {name:"Sumit", email:"sumit@gmail.com",phone:'8769'},
  //   {name:"Bivas", email:"Bivas@gmail.com",phone:'8484'},
  // ]
  // style binding----=====================-
  // color = 'blue';
  // bgcolor = 'skyblue';
  // buttonName = 'blue'
  // updateColor(){
  //   this.color = 'green';
  //   this.bgcolor = 'black';
  // }

  // toggle a element----------------------
  // display = true
  // toggler(){
  //   this.display = !this.display    // if elemen is true this will false and if element is false then it will be true
  // }
  // <!-- send data parent to child --------------->
  data = 10;
  sendData(){
    this.data = Math.floor(Math.random() * 100);
  }

  // <!-- send data child to parent component---------------- -->
  // data:string="";
  // update(item:string){
  //   console.log(item);
  //   this.data = item;
  // }

  // two way binding----------
  data:any

  // template driven form---------
  // name = '';
  // pass = '';
  // getInfo(item: any) {
  //   console.log(item);
  //   this.name = item.name;
  //   this.pass = item.password;
  // }
}
