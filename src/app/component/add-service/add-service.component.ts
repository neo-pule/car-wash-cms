import { Component, OnInit ,ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CarWashService } from '../../services/car-wash.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { TabsComponent } from '../tabs/tabs.component';
@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;
    imgURL ;

    array;
    mainImage : any;
    uploadPercent :any;

    service = {
      name : 'null',
      desc : 'null',
      cost : 0,
	  photoUrl :""
    };

    serviceForm= this.fb.group({

      name: [null, Validators.compose([ Validators.pattern('^[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
        desc: [null, Validators.compose([ Validators.minLength(3), Validators.maxLength(120), Validators.required])],
      cost: [null, Validators.compose([ Validators.minLength(1), Validators.maxLength(4), Validators.required])],

    });
    //
    listService :any;
    displayedColumns: string[] = ['name', 'desc', 'cost', 'actions'];
  constructor(private fb: FormBuilder,private dialog : MatDialog,private route : Router,private car : CarWashService,private storage: AngularFireStorage) { }


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

  next(){
    console.log(this.serviceForm.value.name+'/n'+this.serviceForm.value.desc+'/n'+this.serviceForm.value.cost)
    this.service.name = this.serviceForm.value.name;
    this.service.desc = this.serviceForm.value.desc;
    this.service.cost = this.serviceForm.value.cost;
	this.service.photoUrl = this.mainImage;
    console.log(this.service)
    // addService(service)
	this.car.addService(this.service);
  }

  update(arr){
    // updateService(item)
  console.log(arr)
        const dialogRef = this.dialog.open(TabsComponent,{
        // width : '300px',
        data :{name:arr.name,desc:arr.desc,cost:arr.cost,id:arr.id,photo:arr.photoUrl}
      });

        dialogRef.afterClosed().subscribe(res =>{
          console.log("dialog was closed/n")
          console.log(res)
        })


  }
  delete(obj){
    //     deleteService(obj :any)
alert("delete service.."+obj)

  }
  
    deleteService(obj) { 
  
  console.log(obj)
  alert("Are you sure you want to delete "+obj.email+" permanantly from the Car Wash Database");
console.log(obj.name +" deleted") 
 this.car.deleteService(obj);
  
  }
  
  onSubmit(){
    // this.flag = true;
      // console.log(this.passForm.value.email)
    console.log("this.flag")
  }
  ngOnInit(): void {
    this.car.services().subscribe((data) => {
      this.listService = data;
      console.log(this.listService)
    })

  }

}
