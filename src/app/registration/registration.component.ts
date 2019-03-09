import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthService } from '../auth.service';

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
    this.authService.createUser(this.email, this.password)
      .subscribe(
        (data) => {
          this.authService.sendEmailVerification(data.user);
          alert(`На ${data.user.email} было отправлено письмо с подтверждением.`);

          this.router.navigate(['/']);
        },
        (error) => alert(error)
      );
  }

  onClickGoogle(): void {
    this.authService.logInWithGoogle();
  }
}
