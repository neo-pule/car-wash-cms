import { Component, OnInit ,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { ListServiceDataSource, ListServiceItem } from '../list-service/list-service-datasource';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
// import {MatTableDataSource} from '@angular/material'
import { Router } from '@angular/router';

// ListServiceDataSource
import { StoreObjService } from 'src/app/services/store-obj.service';
import { CarWashService } from '../../services/car-wash.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  imgURL ;
  arrayService;
  arrayICTService;
  // array;rbs','protein'];

  displayedColumns: string[] = ['userId', 'name', 'email','phone', 'location', 'actions'];
array : any;
data : any;
  constructor(private afs : AngularFirestore, private route : Router,private arrObj : StoreObjService,private user :CarWashService) { }

  applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      // this.data.filter = filterValue;
    }

    run(obj : any){
      console.log("user:::: /n"+ obj)
      console.log(this.array)
      this.arrObj.setUserObj(obj);
      this.route.navigate(['home/user-profile'])
    }
    run1(){
      console.log("ICT service")
      this.route.navigateByUrl('service')
    }


  ngOnInit(): void {
    // this.afs.collection('users/').snapshotChanges().subscribe((data: any) => {
    //   this.array = data.map(e => {
    //     return {
    //       key: e.payload.doc.id,
    //       ...e.payload.doc.data()
    //     };
    //   });

    this.user.userProfile().subscribe((users) => {
      console.log(users)
      this.array = users;
      console.log(this.array)
    // })

      console.log(this.array)
      this.data = new MatTableDataSource(this.array)
      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    });

  }

}
