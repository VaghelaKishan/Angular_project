import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersDataService } from '../services/users-data.service';
import { UserStoreService } from '../services/user-store.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit{
  public User:any = [];
  public Role!:string ;
  id:any;
  data: any;
  checkarray:any;
  public fullname : string= "";
  constructor(private userData:UsersDataService,private auth:AuthService,
    private api:ApiService,private userStore:UserStoreService, private _dialog: MatDialog,private route:ActivatedRoute,private modalService:NgbModal,private http:HttpClient){}

    ngOnInit(){
      this.api.getusers().subscribe(res=>{
        this.User = res;
        console.log(this.User);
      });
  
      this.userStore.getFullNameFromStore()
      
      .subscribe(val=>{
        let fullNameFromToken = this.auth.getfullNameFromToken();
        this.fullname = val || fullNameFromToken
      });
  
      this.userStore.getRoleFromStore()
      .subscribe(val=>{
        const roleFromToken = this.auth.getRoleFromToken();
        this.Role = val || roleFromToken;
      })

      if (this.route.snapshot.params['email']) {
        this.email = this.route.snapshot.params['email'];
        this.getEmail();
      }

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

  editProfileForm = new FormGroup({
    profile: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    date: new FormControl(''),
    age: new FormControl(''),
    country: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    qualification: new FormControl(''),
    // checkarray:new FormControl('')
  });

  openModal(
    targetModal: any,
    user: {
      profile: any;
      firstname: any;
      lastname: any;
      email: any;
      phone: any;
      date: any;
      age: any;
      country:any;
      state:any;
      city:any;
      qualification: any;
      
    }
  ) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
    });

    this.editProfileForm.patchValue({
      profile: user.profile,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
      date: user.date,
      age: user.age,
      country:user.country,
      state:user.state,
      city:user.city,
      qualification: user.qualification,
      
    });
  }
  onSubmit() {
    this.api.UploadImage(this.profilepic , this.editProfileForm.get('email')?.value)
    .subscribe({
      next:(res=>{
      console.log(res);
      const image = this.auth.getImage();
        this.profilepic = res || image;
      }),
      error:(err=>{
        console.log(err);
      })
    })
    this.modalService.dismissAll();
    console.log('res:', this.editProfileForm.getRawValue());
    // this.updateData();

    const url = `${this.baseUrl}${this.data.id}`;
    const body = this.editProfileForm.value;

    this.http.put(url, body).subscribe(response => {
      console.log('PUT request was successful');
    }, error => {
      console.error('Error occurred:', error);
    });
    setTimeout(() => {
      location.reload();
      // add your second action here
    }, 1000);
  }
  baseUrl  = "https://localhost:7249/api/User/";

  // updateData() {
  //   // Call the service to update the data in the backend
  //   this.api.updateData(this.data).subscribe(response => {
  //     console.log('Data updated successfully:', response);
  //   });
  // }
email:any;
  getEmail(){
    this.api.getUserByEmail(this.email).subscribe(data =>{
      this.data = data
      console.log(this.data)
    })
    }


    profilepic : any;
    // //profile
    url = './assets/Profile-Male-PNG.png';
    onselectFile(e: any) {
  
  
      if (e.target.files) { 
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (event: any) => {
          this.data.profile = event.target.result;
        };
        const formData = new FormData();
        let fileToUpload = e.target.files[0];
       formData.append('file', fileToUpload, fileToUpload.name);
      this.profilepic = formData;
      }
    }
}
