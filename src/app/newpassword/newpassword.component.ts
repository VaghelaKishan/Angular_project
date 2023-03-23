
import { Component, OnInit } from '@angular/core';
import { ConfirmedValiator } from './confirmed.validator';
import { FormControl, FormGroup, Validators,FormBuilder  } from '@angular/forms';
@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
 
  ngOnInit():void{}
  //   (function () {
  //     'use strict'
    
  //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //     var forms = document.querySelectorAll('.needs-validation')
    
  //     // Loop over them and prevent submission
  //     Array.prototype.slice.call(forms)
  //       .forEach(function (form) {
  //         form.addEventListener('submit', function (event: { preventDefault: () => void; stopPropagation: () => void; }) {
  //           if (!form.checkValidity()) {
  //             event.preventDefault()
  //             event.stopPropagation()
  //           }
    
  //           form.classList.add('was-validated')
  //         }, false)
  //       })
  //   })()
  // }
  

 passForm = new FormGroup({
  newpassword: new FormControl('',[Validators.required,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}')]),
  confirmpassword: new FormControl('',[Validators.required, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}')]),
  oldpassword: new FormControl('',[Validators.required, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}')]),
},[
  ConfirmedValiator.MatchPassword('newpassword','confirmpassword'),
  ConfirmedValiator.OldPassword('newpassword','oldpassword'),
])

passUser(){
  console.warn(this.passForm.value);
  }
get newpassword()
{
  return this.passForm.get('newpassword')
}
get confirmpassword()
{
  return this.passForm.get('confirmpassword')
}
get oldpassword()
{
  return this.passForm.get('oldpassword')
}
get f()
{
  return this.passForm.getError('mismatchPassword') && this.passForm.get('confirmpassword')?.touched;
}
get o()
{
  return this.passForm.getError('mismatchPassword') && this.passForm.get('oldpassword')?.touched;
}

//pass
form: FormGroup=new FormGroup({});
constructor(private FB:FormBuilder){
  this.form= FB.group({
    newpassword:['',[Validators.required]],
    confirmpassword:['',[Validators.required]],
    oldpassword:['',[Validators.required]],
  }
  )
}

}