import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CarWashRequestService {
// request : any;
  constructor(private dog : AngularFirestore) { }

  request(){
  return this.dog.collection<any>('request').snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
  }

}
