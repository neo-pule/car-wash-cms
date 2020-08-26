import { Component, OnInit } from '@angular/core';
import { CarWashService } from '../../services/car-wash.service';
// ListServiceDataSource
import { StoreObjService } from 'src/app/services/store-obj.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

obj : any;

data:any;
	user : {
	name :"",
	email : "",
	phone :"",
	id : "",
	//address : "",
	photoUrl : ""
	}
  constructor(private arrObj :StoreObjService,private users :CarWashService) { }

  	deleteUser() {
		this.users.deleteUser(this.obj)
		
	}
	
  ngOnInit(): void {
	  this.obj = this.arrObj.getUserObj();
	  this.user = this.obj;
    console.log(this.obj);
         console.log(this.user);
  }

}
