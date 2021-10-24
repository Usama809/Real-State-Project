import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {


     registerationForm : FormGroup;
     user : User;
     userSubmitted : boolean;

  constructor(private fb: FormBuilder ,
     private userService : UserServiceService,
     private alertify : AlertifyService) { }

  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //   userName  : new FormControl('Mark' , Validators.required),
    //   email : new FormControl(null , [Validators.required , Validators.email]),
    //   password :  new FormControl(null , [Validators.required , Validators.minLength(8)]),
    //   confirmPassword : new FormControl(null , [Validators.required]),
    //   mobile : new FormControl(null , [Validators.required ,Validators.maxLength(8)])

    // }, this.passwordMatchingValidators );
    this.createRegistrationForm();
  }
  createRegistrationForm()
  {
    this.registerationForm = this.fb.group({
      userName : [null,Validators.required],
      email : [null, [Validators.required, Validators.email]],
      password : [null , [Validators.required, Validators.minLength(8)]],
      confirmPassword : [null, Validators.required],
      mobile : [null , [Validators.required , Validators.maxLength(10)]], 
    } , {validators : this.passwordMatchingValidators});
  }
  passwordMatchingValidators(fg : FormGroup) : Validators 
  {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {
      notmatched : true
    };
  }
  onSubmit()
  {
    console.log(this.registerationForm.value);
   this.userSubmitted = true;
    if(this.registerationForm.value)
    {
    // this.user = Object.assign(this.registerationForm.value);
    this.userService.addUser(this.userData( ));
    this.onReset();
   this.alertify.success('Congrates, You are Successfully Register');
      } else 
    {
      this.alertify.error('Kindly Provide the required fields');

    }
  }
  onReset() {
    this.userSubmitted = false;
    this.registerationForm.reset();
  }
  userData() : User {
    return this.user = {
     UserName: this.userName.value,
     email : this.email.value,
     password : this.password.value,
     mobile : this.mobile.value
    }
  }
   // Getter Methode for all form controls
   get userName()
   {
     return this.registerationForm.get('userName') as FormControl;
   }
   get email()
   {
     return this.registerationForm.get('email') as FormControl;
   }
   get password()
   {
     return this.registerationForm.get('password') as FormControl;
   }
   get confirmPassword()
   {
     return this.registerationForm.get('confirmPassword') as FormControl;
   }
   get mobile()
   {
     return this.registerationForm.get('mobile') as FormControl;
   }

}
