import { Component } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css']
})
export class ChildtoparentComponent {
  udata="x";
  updateData(item:string){
    console.warn(item)
    this.udata=item;
    // this.dataa= Math.floor(Math.random()*10);
  }
  
}
