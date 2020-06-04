import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-passw-update',
  templateUrl: './admin-passw-update.component.html',
  styleUrls: ['./admin-passw-update.component.css']
})
export class AdminPasswUpdateComponent implements OnInit {

  adminPassForm= this.fb.group({

    oldPass: [null, Validators.compose([ Validators.pattern('^[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
    newPass: [null, Validators.compose([ Validators.minLength(1), Validators.maxLength(3), Validators.required])],
    confirmPass: [null, Validators.compose([ Validators.minLength(6), Validators.maxLength(12), Validators.required])],

  });
constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<HomeComponent>) { }
onNoClick(): void {
 this.dialogRef.close();
}
  ngOnInit(): void {
  }

}
