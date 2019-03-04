import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthService {
  user: Observable<User>;

  constructor(private authFire: AngularFireAuth) {
    this.user = authFire.authState;
  }

  logInWithEmail(email, password) {
    return this.authFire.auth
      .signInWithEmailAndPassword(email, password);
  }

  logInWithGoogle(): void {
    this.authFire.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  createUser(email, password) {
    return this.authFire.auth
      .createUserWithEmailAndPassword(email ,password);
  }

  sendEmailVerification(user) {
    return user.sendEmailVerification()
  }

  logOut() {
    this.authFire.auth.signOut();
  }
  //
  // get isAuthenticated(): Observable<boolean> {
  //   return this.user.pipe(map(user => !!user));
  // }
}
