import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CarWashService } from '../../services/car-wash.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';
import { AdminPasswUpdateComponent } from '../admin-passw-update/admin-passw-update.component';
// import { ProfileUpdateComponent } from './component/profile-update/profil t8e-update.component';
export interface dialog {
  age: 444;
  name: 'neo';
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})

export class ProfileComponent implements OnInit {
  profileForm= this.fb.group({

    email: [null, Validators.compose([ Validators.pattern('^[a-zA-Z_.+-]+@[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
    password: [null, Validators.compose([ Validators.minLength(6), Validators.maxLength(12), Validators.required])],

  });
  mail;
  name = 'Neo';
  age ;
  temp : any;
  temp1 : any;
admin : {
	  name : "";
	  email : "";
	  photo : "";
	  phone : 0;
	  id : "";
	  data : "";
	  time : "";
	   address : "";
  };
  constructor(private fb: FormBuilder, private car : CarWashService, private auth : AuthGuardService,public dialog : MatDialog) { }

openP(){
  this.dialog.open(AdminPasswUpdateComponent,{
  // width : '300px',
  data :{name:'Neo',age:444}
  
  });

}

openD(){
   this.dialog.open(ProfileUpdateComponent,{
    // width : '300px',
    data :{name:this.temp.name,email:this.temp.email,photo : this.temp.photo, phone : this.temp.phone,date : this.temp.data,id : this.temp.id}});

   
}
updateProfile(){
//this.auth.updateAdmin();
}
updatePassword(){
  // password
  this.auth.changePass();
}
updateMail(){
  // email
  this.auth.updateAdminMail(this.mail);
}
  ngOnInit(): void {
	 // console.log( this.auth.admin())
	  this.temp = this.auth.admin();
	  this.admin = this.temp;
	  console.log(this.admin)
	  this.temp1 = this.auth.adminProfile();
      this.temp1.subscribe((admin) => {
		  console.log(admin)
	  });

  }
  onSubmit(){
    console.log("hello world");
  }
}
