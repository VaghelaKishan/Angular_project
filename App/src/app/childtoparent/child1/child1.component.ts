import { isNgTemplate } from '@angular/compiler';
import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  childId:any;
  constructor(private route:ActivatedRoute){ }
  ngOnInit():void{
    console.warn("child id is",this.route.snapshot.paramMap.get('id'));
    this.childId=this.route.snapshot.paramMap.get('id');
  }
  // ---------------parent to child------------
   @ Input() item = 0;
    ngOnInitt():void{
    }

    @ Output() updateDataEvent=new EventEmitter<string>();
    ngOnInittt():void{

    }
}
