import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class QuestionService {
  constructor(private db: AngularFirestore) {}

  createQuestion(title: string, description: string) {
    this.db.collection('questions').add({ title, description });
  }

  getQuestions() {
    return this.db.collection('questions').valueChanges();
  }
}
