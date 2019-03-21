import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Question } from './question.model';

@Injectable()
export class QuestionService {
  constructor(private db: AngularFirestore) {}

  create(question: Question): void {
    this.db.collection('questions').add(question.serialize());
  }

  update(question: Question): void {
    this.db.collection('questions').doc(question.id).update(question.serialize());
  }

  getAll(): Observable<Question[]> {
    return this.db.collection('questions').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
      map((questions) => {
        return questions.map((question) => new Question().deserialize(question));
      })
    );
  }

  get(id): Observable<Question> {
    return this.db.collection('questions').doc(id).valueChanges().pipe(
      map((question) => {
        question['id'] = id;
        return new Question().deserialize(question);
      })
    );
  }

}
