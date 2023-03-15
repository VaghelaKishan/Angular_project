import { Component } from '@angular/core';

@Component({
  selector: 'app-parenttochild',
  templateUrl: './parenttochild.component.html',
  styleUrls: ['./parenttochild.component.css']
})
export class ParenttochildComponent {
  title='Parent To Child';
  data=10;
  updateChild(){
    this.data= Math.floor(Math.random()*10);
  }
}
