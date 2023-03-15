import { Component } from '@angular/core';

@Component({
  selector: 'app-templatereferencevariable',
  templateUrl: './templatereferencevariable.component.html',
  styleUrls: ['./templatereferencevariable.component.css']
})
export class TemplatereferencevariableComponent {
getVal(item:any){
  console.warn(item)
}

}
