import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs-request',
  templateUrl: './tabs-request.component.html',
  styleUrls: ['./tabs-request.component.css']
})
export class TabsRequestComponent implements OnInit {

  constructor(private route :Router) { }

  next(){
    this.route.navigate(['home/done-detailed-request']);
  }
  ngOnInit(): void {
  }

}
