import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-done-detailed',
  templateUrl: './done-detailed.component.html',
  styleUrls: ['./done-detailed.component.css']
})
export class DoneDetailedComponent implements OnInit {

  constructor(private route :Router,) { }

next(){
  this.route.navigate(['home/active-detailed-request']);
}
  ngOnInit(): void {
  }
}
