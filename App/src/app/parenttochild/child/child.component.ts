import { isNgTemplate } from '@angular/compiler';
import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor(){}
  @ Input() item = 0;
  ngOnInit():void{
  }
}
