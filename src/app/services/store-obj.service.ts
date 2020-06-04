import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreObjService {
userObj : any;


  constructor() {

  }


  setUserObj(user : any){
    this.userObj = user;
  }

  getUserObj(){
    return this.userObj;
  }
}
