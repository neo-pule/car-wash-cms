import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-active-tasks',
  templateUrl: './active-tasks.component.html',
  styleUrls: ['./active-tasks.component.css']
})
export class ActiveTasksComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

    displayedColumns: string[] = ['refNo', 'empId','date', 'status', 'actions'];
dataSource : any;
  constructor(private route :Router,) { }

next(){
  this.route.navigate(['home/active-detailed-request']);
}
  ngOnInit(): void {
  }
}
