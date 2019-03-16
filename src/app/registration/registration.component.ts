import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  error: string;

  form: FormGroup = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    let email = this.form.get('email').value,
        password = this.form.get('password').value;

    this.authService.createUser(email, password)
      .subscribe(
        (data) => {
          this.authService.sendEmailVerification(data.user);

          this.router.navigate(['/'])
          this.form.reset();
        },
        (error) => { this.error = error }
      );
  }

  onClickGoogle(): void {
    this.authService.logInWithGoogle();
  }

  isControlValid(control: string) {
    return this.form.controls[control].valid;
  }
}
