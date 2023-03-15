import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { UserDataService } from './services/user-data.service';

// <------------------Model------------------------>
// interface datatype{
//   name:string,
//   id:number,
//   indian:string,
//   address:any
// }


@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'blog';
users:any;
 // data="vaghela kishan";

 // events
//   count=0;
//   displayVal: string | undefined;

//   show=true;
//   color="yellow";
//   bgColor='green';

//   getvalue(){
//     return "get function data"
//   }

// ------------Function Call-------
//   getName(name:string){
//     alert(name);
//   }
//   getData(val:string){
//     console.warn(val);
//   }

// ------------event-------
//   getValue(val:string){
//     console.warn(val);
//     this.displayVal = val;
//   }

// ------------Count-------
//   counter(type:string){
//     type==='add'?this.count++:this.count--;
    
//   }


//  <---------------for loop------------------------- -->
//   users=["kishan","kevin","raj","nishit"];

//   uesrdetails=[
//     {name:'kishan',email:'kishan@TestScheduler.com',phone:'888'},
//     {name:'kevin',email:'kevin@TestScheduler.com',phone:'111'},
//     {name:'raj',email:'raj@TestScheduler.com',phone:'999'},
//     {name:'nishit',email:'nishit@TestScheduler.com',phone:'777'},
//   ];


//  <---------------Nested loop-------------- -->
//   user=[
//     {name:'kishan',phone:'888',socialAccount:['facebook','insta','gmail']},
//     {name:'kevin',phone:'111',socialAccount:['facebook','insta','gmail']},
//     {name:'raj',phone:'999',socialAccount:['facebook','insta','gmail']},
//     {name:'nishit',phone:'777',socialAccount:['facebook','insta','gmail']},
//   ]

// updateColor(){
//   this.color="blue";
//   this.bgColor="red";
// }
// <-----------------Form-------------> 
// userData:any={};
// getData(data:NgForm){
//   console.warn(data)
//   this.userData=data;
// }


// <------------------------Toggle Element / hide & showt-----------------------> 
// display=true;
// toggle(){
//   this.display=!this.display;
// }


// <------------------send data parent to child component-----------------------------> 
// dataa=10;
// updateChild(){
//   this.dataa= Math.floor(Math.random()*10);
// }


//<----------------------send data child to parent component-----------------------> 
// udata="x";
// updateData(itemm:string){
//   console.warn(itemm)
//   this.udata=itemm;
//   // this.dataa= Math.floor(Math.random()*10);
// }

// <------------------Bootstrap------------------------> 
// images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1900/500`);

// <------------------two way binding------------------------> 
// name:any;

//  <------------------Template Reference Variable------------------------>
// getVal(item:any){
//   console.warn(item)
// }

// <!-- <------------------Template-driven-form------------------------>
// userLogin(item:any){
//   console.warn(item)
// }


// <------------------Reactive form & validation------------------------>
// loginForm=new FormGroup({
//   user:new FormControl('',[Validators.required,Validators.email]),
//   password:new FormControl('',[Validators.required,Validators.minLength(6)]),
// })
// loginUser(){
//   console.warn(this.loginForm.value);
// }
// get user(){
//   return this.loginForm.get('user')
// }
// get password(){
//   return this.loginForm.get('password')
// }

// <------------------call Api------------------------>
// constructor(private userData:UserDataService) 
// { 
//   userData.users().subscribe((data)=>{
//     this.users=data;
//     console.warn("data",data);
// });
// }

// <------------------post Api------------------------>
//  getUserFormData(data: any){
//   this.userData.saveUsers(data).subscribe((result)=>{
//     console.warn(result)
//   })
// }

// <------------------Model------------------------>
// getData(){
//   const data:datatype={
//     name:'kishan',
//     id:100,
//     indian:"yes",
//     address:"42,rajkot",
//   }
//   return data;  
// }


}


