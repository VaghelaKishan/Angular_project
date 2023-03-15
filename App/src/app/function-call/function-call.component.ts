import { Component } from '@angular/core';

@Component({
  selector: 'app-function-call',
  templateUrl: './function-call.component.html',
  styleUrls: ['./function-call.component.css']
})
export class FunctionCallComponent {
  getName(name:string){
    alert(name);
  }
    getData(val:string){
    console.warn(val);
  }
}
