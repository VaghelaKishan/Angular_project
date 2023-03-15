import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {
    count=0;
  displayVal: string | undefined;
  counter(type:string){
    type==='add'?this.count++:this.count--;
    
  }
}
