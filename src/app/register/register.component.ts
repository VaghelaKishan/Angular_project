import { Component ,OnInit } from '@angular/core';
import { PipePipe } from '../pipe.pipe';
import { ElementRef, VERSION, ViewChild } from '@angular/core';
import { Country, State, City }  from 'country-state-city';
import { FormControl, FormGroup, Validators } from '@angular/forms';

console.log(Country.getAllCountries())
console.log(State.getAllStates())
console.log(City.getAllCities())
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cc:any;


// ngOnInit():void{
//   (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event: { preventDefault: () => void; stopPropagation: () => void; }) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()
// }

registerForm = new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}')]),
  firstname: new FormControl('',[Validators.required]),
  date: new FormControl('',[Validators.required]),
  middlename: new FormControl('',[Validators.required]),
  lastname: new FormControl('',[Validators.required]),
  gender: new FormControl('',[Validators.required]),
  phone: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
  address: new FormControl('',[Validators.required,Validators.maxLength(350)]),
  contry: new FormControl('',[Validators.required]),
  profile: new FormControl('',[Validators.required]),
  Qualification: new FormControl('',[Validators.required]),


})

//get
registerUser(){
  console.warn(this.registerForm.value);
  }
  get firstname()
{
  return this.registerForm.get('firstname')
}
get middlename()
{
  return this.registerForm.get('middlename')
}
get lastname()
{
  return this.registerForm.get('lastname')
}

get user(){
  return this.registerForm.get('email');
}
get password()
{
  return this.registerForm.get('password')
}
get gender()
{
  return this.registerForm.get('gender')
}
get date()
{
  return this.registerForm.get('date')
}
get phone()
{
  return this.registerForm.get('phone')
}
get address()
{
  return this.registerForm.get('address')
}
get contry()
{
  return this.registerForm.get('contry')
}
get profile()
{
  return this.registerForm.get('profile')
}
get Qualification()
{
  return this.registerForm.get('Qualification')
}



//Age
ngOnInit(): void {
  
}

public year:any ={};
public age:any ={};
constructor() {}

 public onSubmit():void{
    this.age.name = new PipePipe().transform(this.year.name);
    console.log(this.age.name)
 }



//  country
@ViewChild('country') country: ElementRef | any
@ViewChild('city') city: ElementRef | any
@ViewChild('state') state: ElementRef | any
name = 'Angular ' + VERSION.major;
countries = Country.getAllCountries();
states:any = null;
cities:any = null;

selectedCountry: null | undefined;
selectedState: null | undefined;
selectedCity: null | undefined;


onCountryChange($event: any): void {
  this.states = State.getStatesOfCountry(JSON.parse(this.country.nativeElement.value).isoCode);
  this.selectedCountry = JSON.parse(this.country.nativeElement.value);
  this.cities = this.selectedState = this.selectedCity = null;
}

onStateChange($event: any): void {
  this.cities = City.getCitiesOfState(JSON.parse(this.country.nativeElement.value).isoCode, JSON.parse(this.state.nativeElement.value).isoCode)
  this.selectedState = JSON.parse(this.state.nativeElement.value);
  this.selectedCity = null;

}

onCityChange($event: any): void {
  this.selectedCity = JSON.parse(this.city.nativeElement.value)
}



clear(type: string): void {
  switch(type) {
    case 'country':
      this.selectedCountry = this.country.nativeElement.value = this.states = this.cities = this.selectedState = this.selectedCity = null;
      break;
    case 'state':
      this.selectedState = this.state.nativeElement.value = this.cities = this.selectedCity = null;
      break;
    case 'city':
      this.selectedCity = this.city.nativeElement.value = null;
      break;
  }
}

//profile
url="./assets/Profile-Male-PNG.png"
onselectFile(e:any){
  if(e.target.files){
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
  }
}

onchange(){
  console.warn(this.registerForm.value);
}

}
