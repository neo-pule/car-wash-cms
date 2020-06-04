import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CarWashService {
temp :any;

  constructor(private dog : AngularFirestore,public afAuth: AngularFireAuth) {

}

services(){
return this.dog.collection<any>('service').snapshotChanges().pipe(
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as any;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
}

empProfile(){
return this.dog.collection<any>('employee').snapshotChanges().pipe(
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as any;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
}

empHistory(){
return this.dog.collection<any>('employee/history').snapshotChanges().pipe(
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as any;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
}

userProfile(){
return this.dog.collection<any>('user').snapshotChanges().pipe(
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as any;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
}
adminProfile(){
return this.dog.collection<any>('user').snapshotChanges().pipe(
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as any;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
}
request(){
return this.dog.collection<any>('requests').snapshotChanges().pipe(
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as any;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
}

updateAdmin(){
  var user = firebase.auth().currentUser;

  user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then((admin) => {
  // Update successful.
  alert(admin)
}).catch((error) => {
  // An error happened.
  alert(error)
});
}
updateAdminMail(mail : string){
//   var user = firebase.auth().currentUser;
//
//   user.auth.currentUser.updateEmail({
//   email: mail
// }).then((admin) => {
//   // Update successful.
//   alert(admin)
// }).catch((error) => {
//   // An error happened.
//   alert(error)
// });

}


}
