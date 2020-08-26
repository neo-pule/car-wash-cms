import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../../services/auth-guard.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 showFiller = false;
  toggle = false;
  constructor(private auth :AuthGuardService) { 
   this.auth.check_Auth();
   }

   sideBarToggle(event) {
	   console.log(event)
	   this.toggle = !this.toggle;
   }
  ngOnInit(): void {
	 
  }

}
