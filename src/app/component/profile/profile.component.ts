import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CarWashService } from '../../services/car-wash.service';
import { AuthGuardService } from '../../services/auth-guard.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfileUpdateComponent } from '../profile-update/profile-update.component';
import { AdminPasswUpdateComponent } from '../admin-passw-update/admin-passw-update.component';
// import { ProfileUpdateComponent } from './component/profile-update/profil t8e-update.component';
export interface dialog {
  age: number;
  name: string;
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
  constructor(private fb: FormBuilder, private car : CarWashService, private auth : AuthGuardService,private dialog : MatDialog) { }

openP(){
  const dialogRef = this.dialog.open(AdminPasswUpdateComponent,{
  // width : '300px',
  data :{name:this.name,age:this.age}});

  dialogRef.afterClosed().subscribe(res =>{
    console.log("dialog was closed/n")
    console.log(res)
  })
}

openD(){
    const dialogRef = this.dialog.open(ProfileUpdateComponent,{
    // width : '300px',
    data :{name:this.name,age:this.age}});

    dialogRef.afterClosed().subscribe(res =>{
      console.log("dialog was closed/n")
      console.log(res)
    })
}
updateProfile(){
this.car.updateAdmin();
}
updatePassword(){
  // password
  this.auth.changePass();
}
updateMail(){
  // email
  this.car.updateAdminMail(mail);
}
  ngOnInit(): void {
    this.car.adminProfile();
  }
  onSubmit(){
    console.log("hello world");
  }
}
