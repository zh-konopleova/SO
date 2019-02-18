import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  email;
  password;

  constructor(public authFire: AngularFireAuth) {}

  ngOnInit() {}

  onSubmit() {
    this.createUser();
  }

  onClickGoogle() {
    this.authFire.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  createUser() {
    this.authFire.auth
      .createUserWithEmailAndPassword(this.email ,this.password)
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
}
