import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css']
})
export class DoneTasksComponent implements OnInit {
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = ['refNo', 'empId','duration', 'status', 'actions'];
dataSource : any;
  constructor(private route :Router) { }

  next(){
    this.route.navigate(['home/done-detailed-request']);
  }
  ngOnInit(): void {
  }

}
