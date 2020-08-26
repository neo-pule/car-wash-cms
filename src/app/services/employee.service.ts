import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

writePost : any;
  constructor(private dog : AngularFirestore,public afAuth: AngularFireAuth) { }
  
  

deleteUser(obj) {
	var user = firebase.auth().currentUser;
 console.log(obj)
 return this.dog.collection('employee/').doc(obj.id).delete();

//user.delete().then(function() {
  // User deleted.
//}).catch(function(error) {
  // An error happened.
//});

}

empProfile(uid){
	
	return this.dog.collection('employee/').doc(uid).valueChanges();
	
	//then(() =>{

    //  alert('employee profile uid : '+ uid+' successful retrieved');
  //  }
  //  );
}
	
employees(){
return this.dog.collection<any>('employee').snapshotChanges().pipe(
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as any;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
}

addEmp(user) {
	
	 this.afAuth.createUserWithEmailAndPassword(user.email, user.pass).then((results )=> {
      
	  console.log(results.user.uid)
     
     // user.uid = results.user.uid;
      //user.pass = "";
    this.writePost = this.dog.collection<any>('employee').doc(results.user.uid);
   // this.writePost.add(user);
      this.writePost.set({
		  name : user.name,
		  email : user.email
	  }).then((ref) =>{

      console.log("worker document was written with ID : "+ ref +"added successful");
	  alert("worker added successful"+ref);
    }).catch((err) => {
		// An error happened.
		console.log(err)
		alert(err)
	});
        alert(user.email + " succesful registered" );
       // this.router.navigateByUrl(url);
		//	var user = results.user;
			  //var user = firebase.auth().currentUser;

      //user.sendEmailVerification().then(function() {
  // Email sent.
  
      // }).catch(function(error) {
  // An error happened.
      //});

		
    //}).catch((err) => {
		// An error happened.
	//	console.log(err)
	//	alert(err)
	//});

});

}

empHistory() {
return this.dog.collection<any>('employee/history').snapshotChanges().pipe(
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as any;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
}

}
