import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthService } from '../authorization.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService
      .createUser(this.email, this.password)
      .then((data) => {
        let user = data.user;

        this.authService.sendEmailVerification(user)
          .then(() => {
            alert(`На ${user.email} было отправлено письмо с подтверждением.`);
            this.router.navigate(['/']);
          });
      })
      .catch((error) => {
        alert(error);
      });
  }

  onClickGoogle(): void {
    this.authService.logInWithGoogle();
  }
}
