import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedloop',
  templateUrl: './nestedloop.component.html',
  styleUrls: ['./nestedloop.component.css']
})
export class NestedloopComponent {
  user=[
    {name:'kishan',phone:'888',socialAccount:['facebook','insta','gmail']},
    {name:'kevin',phone:'111',socialAccount:['facebook','insta','gmail']},
    {name:'raj',phone:'999',socialAccount:['facebook','insta','gmail']},
    {name:'nishit',phone:'777',socialAccount:['facebook','insta','gmail']},
  ]
}
