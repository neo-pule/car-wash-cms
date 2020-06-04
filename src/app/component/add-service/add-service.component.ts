import { Component, OnInit ,ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;
    imgURL ;
    arrayService;
    arrayICTService;
    array;

    serviceForm= this.fb.group({

      name: [null, Validators.compose([ Validators.pattern('^[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
        desc: [null, Validators.compose([ Validators.pattern('^[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      cost: [null, Validators.compose([ Validators.minLength(1), Validators.maxLength(3), Validators.required])],

    });
    //
    dataSource:any;
    displayedColumns: string[] = ['name', 'description', 'cost', 'actions'];
  constructor(private fb: FormBuilder,private route : Router) { }


  uploadFile(event) {
    const file = event.target.files[0];
    // const filePath = 'PIC' + Math.random().toString(36).substring(2);
    // const fileRef = this.storage.ref(filePath);
    // const task = this.storage.upload(filePath, file);
    // // observe percentage changes
    // this.uploadPercent = task.percentageChanges();
    // task.snapshotChanges().pipe(
    //   finalize(() => {
    //     this.downloadU = fileRef.getDownloadURL().subscribe(url => {
    //       console.log(url);
    //       this.mainImage = url
    //       this.uploadPercent = null;
    //     });
    //   })
    // ).subscribe();
  }

  next(){
    this.route.navigate(['home/view-service'])
  }
  onSubmit(){
    // this.flag = true;
      // console.log(this.passForm.value.email)
    console.log("this.flag")
  }
  ngOnInit(): void {
  }

}
