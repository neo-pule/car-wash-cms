import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

    login(){
    // updateService(item)

        const dialogRef = this.dialog.open(LoginComponent,{
        // width : '300px',
      //  data :{name:arr.name,desc:arr.desc,cost:arr.cost,id:arr.id,photo:arr.photoUrl}
      });

        dialogRef.afterClosed().subscribe(res =>{
          console.log("dialog was closed/n")
          console.log(res)
        })


  }
  ngOnInit(): void {
  }

}
