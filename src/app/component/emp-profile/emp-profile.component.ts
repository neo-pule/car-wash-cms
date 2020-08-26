import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { StoreObjService } from '../../services/store-obj.service';
@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {


emp : {
	  name : "";
	  email : "";
	  photo : "";
	  phone : 0;
	  id : "";
	
	   address : "";
  };
  temp: any;
  tempID : any;
   
  constructor(private empObj :StoreObjService, private emps : EmployeeService) { }

  
  ngOnInit(): void {
	  console.log(this.empObj.getUserObj())
	  this.tempID = this.empObj.getUserObj();
	  let id = this.tempID.uid;
	   // this.temp = this.emps.empProfile(id);
	  this.emp = this.empObj.getUserObj();
  }

}
