import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TabsComponent } from '../tabs/tabs.component';
import { StoreObjService } from '../../services/store-obj.service';
import { EmployeeService } from '../../services/employee.service';
@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
name:'neo';
age : 0;
data : any;
request : any;
  constructor(private employee :EmployeeService,private dialog : MatDialog,private getObj : StoreObjService) { }

  ngOnInit(): void {
	  this.request = this.getObj.getReqObj();
	  console.log(this.request);

     this.employee.employees().subscribe((emp) => {
      console.log(emp)
      this.data = emp;
      console.log(this.data)
  });
  }
openD(){
    const dialogRef = this.dialog.open(TabsComponent,{
    // width : '300px',
    data :{name:this.name,age:this.age}});

    dialogRef.afterClosed().subscribe(res =>{
      console.log("dialog was closed/n")
      console.log(res)
    })
}
cancel() {
	alert('are sure you want to cancel request :');
}
}
