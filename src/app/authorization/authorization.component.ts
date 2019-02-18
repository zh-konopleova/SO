import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  email;
  password;

  constructor(public authFire: AngularFireAuth) {}

  ngOnInit() {}

  onSubmit() {
    this.logInUser();
  }

  logInUser() {
    this.authFire.auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
