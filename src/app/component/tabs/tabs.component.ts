import { Component, OnInit ,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { CarWashService } from '../../services/car-wash.service';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
	temp : any;
	  imgURL ;

    array;
    mainImage : any;
    uploadPercent :any;
  
  flag : boolean = false;
  service = {
      name : 'null',
      desc : 'null',
      cost : 0,
	  photo :""
    };
	
	
      updateService= this.fb.group({

     name: [null, Validators.compose([ Validators.pattern('^[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
        desc: [null, Validators.compose([ Validators.pattern('^[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      cost: [null, Validators.compose([ Validators.minLength(10), Validators.maxLength(85), Validators.required])],
      });
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder,private storage: AngularFireStorage,private car: CarWashService) { }

   uploadFile(event) {
	   this.flag = true;
    const file = event.target.files[0];
    const filePath = 'service/updated/-photo ' + Math.random().toString(36).substring(2);
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
  
  update() {
	  
	  if(this.flag) {
	      console.log("update service photo")
	
	this.service.photo = this.mainImage;
	  console.log(this.service)
	  }
	  else{
		      console.log("Don't update service photo")
	  console.log(this.service)
	  }
   // console.log(this.service)
    // update service
	this.car.updateService(this.service);
	
	
  }
  ngOnInit(): void {
	  this.temp = this.data;
	  this.service = this.temp;
	  console.log(this.service)
  }

}
