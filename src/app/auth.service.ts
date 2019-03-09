import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';


@Injectable()
export class AuthService {
  user: Observable<User>;

  constructor(private authFire: AngularFireAuth) {
    this.user = authFire.authState;
  }

  logInWithEmail(email, password): Observable<any> {
    return from(this.authFire.auth.signInWithEmailAndPassword(email, password));
  }

  logInWithGoogle(): void {
    this.authFire.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  createUser(email, password): Observable<any> {
    return from(this.authFire.auth.createUserWithEmailAndPassword(email ,password));
  }

  sendEmailVerification(user): void {
    user.sendEmailVerification()
  }

  logOut(): void {
    this.authFire.auth.signOut();
  }
}
