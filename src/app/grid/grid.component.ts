import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersDataService} from '../services/users-data.service';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { UserStoreService } from '../services/user-store.service';
import { MatDialog } from '@angular/material/dialog';
import { Register2Component } from '../register2/register2.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit{

  users1: any[] = []; 
  currentPage = 1;
  
  public User:any = [];
  public Role!:string ;
  admin: boolean = true;
  
  public fullname : string= "";
  constructor(private userData:UsersDataService,private auth:AuthService,private http:HttpClient,
    private api:ApiService,private userStore:UserStoreService, 
    private _dialog: MatDialog,
    private modalService:NgbModal,private route:ActivatedRoute){
  //   userData.users().subscribe((data: any)=>{
  //     this.User=data;
  //     console.warn("data",data);
  // });
}
adminId:any;
id:any;
data:any;
  ngOnInit(){
    
    this.userStore.getFullNameFromStore()
    
    .subscribe(val=>{
      let fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullname = val || fullNameFromToken
    });
    
    this.userStore.getRoleFromStore()
    .subscribe(val=>{
      const tokenPayload = this.auth.decodeToken();
      this.Role = tokenPayload.role;
      if (this.Role === "User") {
          this.admin = false;
        } else {
            this.admin = true;
          }
        })
        
        this.api.getusers().subscribe(res=>{
          this.User = res;
    
          for(const user of this.User){
            const Fullname = `${user.firstname}  ${user.lastname}`
      
            if(user.role === "Admin" && Fullname === this.fullname){
              this.adminId = user.id;
            }
          }
        });
    this.id = this.route.snapshot.params['id'];
      this.getOne();
  }


  getOne(){
    this.api.getOne(this.id).subscribe(data=>{
      this.data = data;
      console.log(this.data);
    })
  }

  logout(){
    this.auth.sighOut();
  }

  deleteItem(id: number) {
    this.api.deleteItem(id).subscribe(() => {
      this.User = null;
      this.api.getusers().subscribe(res=>{
        this.User=res;
      });
    });
  }

 
  editProfileForm = new FormGroup({
    id: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    date: new FormControl(''),
    age: new FormControl(''),
    qualification: new FormControl(''),
  });

  openModal(
    targetModal: any,
    user: {
      id:any;
      firstname: any;
      lastname: any;
      email: any;
      phone: any;
      date: any;
      age: any;
      qualification: any;
    }
  ) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
    });

    this.editProfileForm.patchValue({
      id:user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
      date: user.date,
      age: user.age,
      qualification: user.qualification,
    });
  }
  onSubmit() {
    this.modalService.dismissAll();
    console.log('res:', this.editProfileForm.getRawValue());
  }


  items = Array.from({length: 100}).map((_, i) => `Item #${i}`);
  p: number =1;
  

 
}


