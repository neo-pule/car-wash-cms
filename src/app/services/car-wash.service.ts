import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestoreDocument} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

export interface service {
  key? : string;
  name : string;
  desc : string;
  cost : number;
}
@Injectable({
  providedIn: 'root'
})
export class CarWashService {

private serviceDoc: AngularFirestoreDocument<service>; // class name
temp :any;


 writePost;
  constructor(private dog : AngularFirestore,public afAuth: AngularFireAuth) {

}

services(){
return this.dog.collection<any>('services').snapshotChanges().pipe(
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as any;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
}

addService(service) {
console.log(service)
   this.writePost = this.dog.collection<any>('services');
   this.writePost.add(service).then((res) =>{
     alert(res);
     console.log("service added successful");
   });
}

deleteService(obj :any){
console.log(obj);

   return this.dog.collection('services/').doc(obj.id).delete().then(() =>{
     alert('service '+ obj.name+' successful deleted');
   } );
}

updateService(item){
  console.log(item)
  this.serviceDoc = this.dog.collection('services/').doc(item.id);
  this.serviceDoc.update(item).then(() =>{
    alert(item.name +' is updated successful')
  });
  console.log("service updated succesful");
}



userProfile(){
return this.dog.collection<any>('users').snapshotChanges().pipe(
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as any;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
}

deleteUser(obj) {
	var user = firebase.auth().currentUser;
 console.log(obj)
//user.delete().then(function() {
  // User deleted.
//}).catch(function(error) {
  // An error happened.
//});

return this.dog.collection('users/').doc(obj.id).delete();


}

}
