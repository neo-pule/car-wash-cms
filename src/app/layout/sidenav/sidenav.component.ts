import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private route: Router,private auth :AuthGuardService) { }

  signOut() {
	  console.log("Sign out ..")
	 this.auth.logOut();
  }
profile(){
  this.route.navigateByUrl('/home/admin-profile')
}  

  home(){
	 this.route.navigateByUrl('/home/index')  
  }
   service(){
	   this.route.navigateByUrl('home/add-service')
  }
   request(){
	   this.route.navigateByUrl('/home/tabs-request')
  }
   admin(){
	   this.route.navigateByUrl('/home/admin')
  }
   user(){
	   this.route.navigateByUrl('/home/user-accounts')
  }
   emp(){
	   this.route.navigateByUrl('/home/admin-profile')
  }
  
  
  ngOnInit(): void {
  }

}
