
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  ngOnInit():void{
    (function () {
      'use strict'
    
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')
    
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event: { preventDefault: () => void; stopPropagation: () => void; }) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
    
            form.classList.add('was-validated')
          }, false)
        })
    })()
  }
    
  
  
  forgetForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      check: new FormControl('',[Validators.required]),
    })
  
    forgetUser(){
      console.warn(this.forgetForm.value);
      }
    get email(){
      return this.forgetForm.get('email');
    }
    get password()
    {
      return this.forgetForm.get('password')
    }
    get check()
    {
      return this.forgetForm.get('check')
    }
}
