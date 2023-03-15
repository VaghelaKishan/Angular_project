import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent {
  users=["kishan","kevin","raj","nishit"];

  uesrdetails=[
    {name:'kishan',email:'kishan@TestScheduler.com',phone:'888'},
    {name:'kevin',email:'kevin@TestScheduler.com',phone:'111'},
    {name:'raj',email:'raj@TestScheduler.com',phone:'999'},
    {name:'nishit',email:'nishit@TestScheduler.com',phone:'777'},
  ];
}
