import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AuthService } from '../authorization.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  email;
  password;
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated;
  }

  onSubmit() {
    this.authService.createUser(this.email, this.password);
  }

  onClickGoogle() {
    this.authService.logInWithGoogle();
  }
}
