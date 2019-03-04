import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
// import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private user: User;

  constructor(public authFire: AngularFireAuth) {
    authFire.user.subscribe((user) => {
      this.user = user;
    });
  }

  logInWithEmail(email, password) {
    return this.authFire.auth
      .signInWithEmailAndPassword(email, password);
  }

  logInWithGoogle() {
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

  get isAuthenticated() {
    return !!this.user;
  }

  get currentUser() {
    return this.user;
  }
}
