import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<TabsComponent>) { }


  run(){
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
