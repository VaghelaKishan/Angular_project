import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component {
  users:any;
  
constructor(private userData:UserdataService) 
{ 
  userData.users().subscribe((data)=>{
    this.users=data;
    console.warn("data",data);
});
}
}
