import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  email;
  password;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    this.authService.logInWithEmail(this.email, this.password);
  }

  onClickGoogle() {
    this.authService.logInWithGoogle();
  }

}
