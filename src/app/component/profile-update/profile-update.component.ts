import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthGuardService } from '../../services/auth-guard.service';
@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

    imgURL ;

    array;
    mainImage : any;
    uploadPercent :any;
	
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
	
      adminProfileForm= this.fb.group({

        name: [null, Validators.compose([ Validators.pattern('^[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
        email: [null, Validators.compose([ Validators.minLength(1), Validators.maxLength(3), Validators.required])],
        phone: [null, Validators.compose([ Validators.minLength(6), Validators.maxLength(12), Validators.required])],

      });
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private auth: AuthGuardService,private fb: FormBuilder,private storage: AngularFireStorage) { }
  onNoClick(): void {
    // this.dialogRef.close();
   }
   
     uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'service/photo ' + Math.random().toString(36).substring(2);
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          console.log(this.uploadPercent);
          console.log(url);
          this.mainImage = url
          this.uploadPercent = null;
        });
      })
    ).subscribe();
  }
  
  run(){
	  console.log("old object "+this.temp1)
	  console.log("updated object "+this.admin)
	  this.auth.updateAdmin(this.admin)
  }
  
  ngOnInit(): void {
	   this.temp = this.data;
	    console.log(this.data)
	  this.admin = this.temp;
	  console.log(this.admin)
	  
  }

}