import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreObjService {
userObj : any;
reqObj : any;

  constructor() {

  }

 setReqObj(req : any){
    this.reqObj = req;
  }

  setUserObj(user : any){
    this.userObj = user;
  }

  getReqObj(){
    return this.reqObj;
  }
  getUserObj(){
    return this.userObj;
  }
}
