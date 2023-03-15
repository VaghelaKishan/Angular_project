import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
@Component({
  selector: 'app-postapi',
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.css']
})
export class PostapiComponent {
 userData: any;
 getUserFormData(data: any){
  this.userData.saveUsers(data).subscribe((result: any)=>{
    console.warn(result)
  })
}
}
