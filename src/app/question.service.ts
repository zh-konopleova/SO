import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionService {
  constructor(private db: AngularFirestore) {}

  create(title: string, description: string): void {
    this.db.collection('questions').add({ title, description });
  }

  getAll(): Observable<any[]> {
    return this.db.collection('questions').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
  }

  get(id): Observable<any> {
    return this.db.collection('questions').doc(id).valueChanges();
  }

}
