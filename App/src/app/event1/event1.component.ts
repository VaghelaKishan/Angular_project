import { Component } from '@angular/core';

@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.css']
})
export class Event1Component {
    count=0;
  displayVal: string | undefined;
    show=true;
  color="yellow";
  bgColor='green';

  getData(val:string){
    console.warn(val);
  }


  getValue(val:string){
    console.warn(val);
    this.displayVal = val;
  }
  counter(type:string){
    type==='add'?this.count++:this.count--;
    
  }
}
