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
    this.authFire.auth
      .createUserWithEmailAndPassword(email ,password)
      .then((data) => {
        let user = data.user;
        this.sendVerification(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  sendVerification(user) {
    user.sendEmailVerification()
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        alert(error.message);
      });
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
