import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-active-detailed',
  templateUrl: './active-detailed.component.html',
  styleUrls: ['./active-detailed.component.css']
})
export class ActiveDetailedComponent implements OnInit {

  constructor(private route :Router,) { }

next(){
  this.route.navigate(['home/active-detailed-request']);
}
  ngOnInit(): void {
  }
}
