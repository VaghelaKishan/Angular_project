import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleelement',
  templateUrl: './toggleelement.component.html',
  styleUrls: ['./toggleelement.component.css']
})
export class ToggleelementComponent {
display=true;
toggle(){
  this.display=!this.display;
}

}
