import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, response) => {
	
	//if (response.auth.token.admin !== true) {
		//return { error : 'Only admins can other admins'}
	//}
  // get user & add custom claim (admin)
  return admin.auth().getUserByEmail(data.email).then((user) => {
	  return admin.auth().setCustomUserClaims(user.uid, {
		  admin : true
	  });
  
 }).then(() => {
 return {
	 message : 'Successs '+data.email+' has been made an admin'
 }
 
 }).catch((err) => {
	 return err;
 });
}); 
 
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
