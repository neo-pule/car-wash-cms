import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {


      adminProfileForm= this.fb.group({

        name: [null, Validators.compose([ Validators.pattern('^[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
        email: [null, Validators.compose([ Validators.minLength(1), Validators.maxLength(3), Validators.required])],
        phone: [null, Validators.compose([ Validators.minLength(6), Validators.maxLength(12), Validators.required])],

      });
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<HomeComponent>) { }
  onNoClick(): void {
     this.dialogRef.close();
   }
  ngOnInit(): void {
  }

}
