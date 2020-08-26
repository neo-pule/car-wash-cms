import { Component, OnInit ,ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TabsComponent } from '../tabs/tabs.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CarWashRequestService } from '../../services/car-wash-request.service';
import { StoreObjService } from '../../services/store-obj.service';
import { Router } from '@angular/router';
export interface dialog {
  age: number;
  name: string;
}
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  imgURL ;
  arrayService;
  arrayICTService;
  array;
  name="neo";
  age=51;
  displayedColumns: string[] = ['refNo', 'userId','date', 'status', 'actions'];
  data : any;
  constructor(private dialog : MatDialog, private request : CarWashRequestService,private reqObj : StoreObjService,private route: Router ) { }
 Router 

openD(){
    const dialogRef = this.dialog.open(TabsComponent,{
    // width : '300px',
    data :{name:this.name,age:this.age}});

    dialogRef.afterClosed().subscribe(res =>{
      console.log("dialog was closed/n")
      console.log(res)
    })
}

boom(req){  
console.log(req);
this.reqObj.setReqObj(req);
this.route.navigateByUrl('home/view-request');
}
  ngOnInit(): void {
    this.request.request().subscribe((req) => {
      console.log(req)
      this.data = req;
      console.log(this.data)
  });
  }

}
