import { Component, OnInit ,ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: false }) sort: MatSort;
    imgURL ;
    arrayService;
    arrayICTService;
    array;

    empForm= this.fb.group({

      name: [null, Validators.compose([ Validators.pattern('^[a-zA-Z-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
      email: [null, Validators.compose([ Validators.minLength(1), Validators.maxLength(3), Validators.required])],
      passwrd: [null, Validators.compose([ Validators.minLength(6), Validators.maxLength(12), Validators.required])],

    });
dataSource:any;

    displayedColumns: string[] = ['name', 'email', 'number', 'actions'];
  constructor(private fb: FormBuilder) { }

  onSubmit(){
    // this.flag = true;
      // console.log(this.passForm.value.email)
    console.log("this.flag")
  }
  ngOnInit(): void {
  }

}
