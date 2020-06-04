import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private route :Router,
    public afAuth: AngularFireAuth) { }

    check_Auth() {
    var user = firebase.auth().currentUser
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.route.navigateByUrl('home')
      } else {
        this.route.navigateByUrl('login')
      }
    });
  }

  async logIn(email: string, password: string) {
      // var user = firebase.auth().currentUser
    await this.afAuth.signInWithEmailAndPassword(email, password).then((success) => {
      alert(email + 'successful signed in ..')
      this.route.navigateByUrl('home')
    }).catch((err) => {
      alert(err)
    })
  }

  async logOut() {
 //    await this.afAuth.auth.signOut().then((success) => {
 //     this.route.navigateByUrl('login').then(()=>{
 //       console.log("success" + success);
 //       // this.route.navigateByUrl('/login');
 //     })
 //   }).catch((error) => {
 //     console.log(error)
 //   })
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
}).catch(function(error) {
  // An error happened.
    console.log("Email is not sent")
      alert(emailAddress+" is not a registered Admin account.");
});
}
}
