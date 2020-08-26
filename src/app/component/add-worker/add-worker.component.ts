import { Component, OnInit ,ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StoreObjService } from '../../services/store-obj.service';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;
    imgURL ;
    arrayService;
    arrayICTService;
    array;

    empForm= this.fb.group({

      name: [null, Validators.compose([ Validators.pattern('^[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      email: [null, Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      passwrd: [null, Validators.compose([ Validators.minLength(6), Validators.maxLength(12), Validators.required])],

    });
data:any;
	user = {
	name :'null',
	email : 'null',
	pass :"null"
	
	};
	 

	
    displayedColumns: string[] = ['name', 'email', 'number', 'actions'];
  constructor(private fb: FormBuilder,private employee :EmployeeService,private empObj :StoreObjService,private route :Router) { }

  onSubmit(){
    // this.flag = true;
      // console.log(this.passForm.value.email)
    console.log("this.flag")
  }
  addEmps() {
	 
	  this.user.name = this.empForm.value.name;
	this.user.email = this.empForm.value.email;
	this.user.pass = this.empForm.value.passwrd;
	
	  console.log(this.user)
	  
	    this.employee.addEmp(this.user); 

  }
  deleteEmp(obj) { 
  
  console.log(obj)
  alert("Are you sure you want to delete "+obj.email+" permanantly from the Car Wash Database");
console.log(obj.name +" deleted") 
 this.employee.deleteUser(obj);
  
  }
  empProfile(obj) {	  
  //this.employee.empProfile().
  
  console.log("user:::: /n"+ obj)
      this.empObj.setUserObj(obj);
      this.route.navigate(['home/tabs-emp'])
  }
  ngOnInit(): void {
	  
    this.employee.employees().subscribe((emp) => {
      console.log(emp)
      this.data = emp;
      console.log(this.data)
  });

}
}
