import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthGuardService } from '../../services/auth-guard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


    adminForm= this.fb.group({
 
      mail: [null, Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],

    });
data:any;
	user = {
	name :'null',
	email : 'null',
	pass :"null"
	
	};
	 

  constructor(private fb: FormBuilder,private auth :AuthGuardService,private route :Router) { }


  Admin() {
	 
	 let mail = this.adminForm.value.mail;

	  console.log(mail)
	  
	 //   this.auth.addAmin(this.user); 

  }

  ngOnInit(): void {
	  

}
}
