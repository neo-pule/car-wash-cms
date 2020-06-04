import { Component, OnInit } from '@angular/core';

// ListServiceDataSource
import { StoreObjService } from 'src/app/services/store-obj.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private arrObj :StoreObjService) { }

  ngOnInit(): void {
    console.log(this.arrObj.getUserObj());
        // console.log(this.arrObj);
  }

}
