import { Component } from '@angular/core';

interface datatype{
  name:string,
  id:number,
  indian:string,
  address:any
}
@Component({
  selector: 'app-model1',
  templateUrl: './model1.component.html',
  styleUrls: ['./model1.component.css']
})
export class Model1Component {
  getData(){
    const data:datatype={
      name:'kishan',
      id:100,
      indian:"yes",
      address:"42,rajkot",
    }
    return data;  
  }
  
}
