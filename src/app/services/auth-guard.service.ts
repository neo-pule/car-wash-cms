import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

export interface admin {
  key? : string;
  name : string;
  email : string;
   address : string;
  phone : number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  auth : any;
  private adminDoc: AngularFirestoreDocument<admin>;
    admins = {
	  name : "",
	  email : "",
	  photo : "",
	  phone : 0,
	  id : "",
	  data : "",
	  time : "",
  };
  writePost;
  constructor(private route :Router,
    public afAuth: AngularFireAuth,private dog : AngularFirestore) { }

    check_Auth() {
    // var user = firebase.auth().currentUser
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.route.navigateByUrl('home/index')
      } else {
		  alert("please Sign in ..")
        this.route.navigateByUrl('login')
      }
    });
  }

   admin() {
  //  var name = firebase.auth().currentUser.displayName;
	//var mail = firebase.auth().currentUser.email;
	//var id = firebase.auth().currentUser.uid;
//	var phone = firebase.auth().currentUser.phoneNumber;
//	var photo = firebase.auth().currentUser.photoURL;
	//var data = firebase.auth().currentUser.metadata.creationTime;
	//var time = firebase.auth().currentUser.metadata.lastSignInTime;
	
//	this.admins.name =  firebase.auth().currentUser.displayName;
	this.admins.email = firebase.auth().currentUser.email;
//	this.admins.photo = firebase.auth().currentUser.photoURL;
//	this.admins.phone = firebase.auth().currentUser.phoneNumber;
	this.admins.id = firebase.auth().currentUser.uid;
	this.admins.data = firebase.auth().currentUser.metadata.creationTime;
	this.admins.time = firebase.auth().currentUser.metadata.lastSignInTime;
	

    this.auth =this.afAuth;
   //console.log(this.admins)
   //console.log("/n mail :" +mail +"/n id :"+id+"/n data : "+data+"/n time : "+time)
   	return this.admins;
   //console.log("admin name " + name+"/n mail :" +mail +"/n id"+id+" /n photo"+photo+"/n phone"+phone+"/n data"+data+"/n time"+time)
  }
  adminProfile(){
return this.dog.collection<any>('users').snapshotChanges().pipe(
  map(actions => actions.map(a => {
    const data = a.payload.doc.data() as any;
    const id = a.payload.doc.id;
    return { id, ...data };
  }))
);
}

addAdmin(admins) {
	
	  this.writePost = this.dog.collection<any>('administrator');
   this.writePost.add(admins).then((res) =>{
     alert(res);
     console.log("admin added successful");
   });
   
}

updateAdmin(item){
	
	 console.log(item)
  this.adminDoc = this.dog.collection('users/').doc(item.id);
  this.adminDoc.update(item).then(() =>{
    alert(item.name +' is updated successful')
  }).catch((err) => {
	console.log(err)  
  });
  console.log("admin updated succesful");
  // var user = firebase.auth().currentUser;

  // user.updateProfile({
  // displayName: "Jane Q. User",
 //  photoURL: "https://example.com/jane-q-user/profile.jpg"
 //}).then((admin) => {
   // Update successful.
  // alert(admin)
 //}).catch((error) => {
   // An error happened.
  // alert(error)
 //});
}

updateAdminMail(mail : any){
   var user = firebase.auth().currentUser;

 //  user.updateEmail({
//   email: mail,
// }).then((admin) => {
   // Update successful.
 //  alert(admin)
// }).catch((error) => {
   // An error happened.
 //  alert(error)
// });

}
  async logIn(email: string, password: string) {
      // var user = firebase.auth().currentUser
    await this.afAuth.signInWithEmailAndPassword(email, password).then((success) => {
      alert(email + 'successful signed in ../n'+success)
      this.route.navigateByUrl('home/index')
    }).catch((err) => {
      alert("Username and/or Password are incorrect. Please try again.")
    })
  }

  async logOut() {
	  console.log("logout .." )
     await this.afAuth.signOut().then((success) => {
 //     this.route.navigateByUrl('login').then(()=>{
        console.log("success" + success);
        this.route.navigateByUrl('/login');
      }).catch((error) => {
		alert(error)
      console.log(error)
    });
 }
 emailVerify(){

   //  this.afAuth.sendEmailVerification().then(function() {
   //   // Email sent.
   // }).catch(function(error) {
   //   // An error happened.
   // });

 }


 changePass(){
//    var user = firebase.auth().currentUser;
// var newPassword = getASecureRandomPassword();
//
// user.updatePassword(newPassword).then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });
 }

 resetPass(emailAddress){
// var emailAddress = "user@example.com";

this.afAuth.sendPasswordResetEmail(emailAddress).then((obj) => {
  // Email sent.
  console.log(obj)
  console.log("Email sent")
  alert("reset password link is successfully found, please check your email for instructions on how to change your password");
}).catch(function(error){
  // An error happened.
    console.log("Email is not sent")
      alert(emailAddress+" is not a registered Admin account.");
});
}
}