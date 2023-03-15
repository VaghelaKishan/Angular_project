import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent {
  title='Style Binding'
  color="yellow";
  bgColor='green';
updateColor(){
  this.color="blue";
  this.bgColor="red";
}
}
