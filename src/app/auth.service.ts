import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import { first, tap } from 'rxjs/operators';



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

  isLoggedIn() {
   return this.authFire.authState.pipe(first())
}

  isAuthUser() {
    this.isLoggedIn().pipe(
      tap(user => {
        if (user) {
          return true;
        } else {
          return false
        }
      })
    )
    .subscribe()
  }
  // isAuthUser(): Observable<boolean> {
  //   return this.user.pipe(map((user) => {
  //     if (user) {
  //       return true;
  //     }
  //     return false;
  //   }));
  // }


}
