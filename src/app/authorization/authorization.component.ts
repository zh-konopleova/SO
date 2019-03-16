import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  error: string;

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
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

    this.authService.logInWithEmail(email, password)
      .subscribe(
        () => {
          this.form.reset();
          this.router.navigate(['/']);
        },
        (error) => { this.error = error; }
      );
  }

  onClickGoogle(): void {
    this.authService.logInWithGoogle();
  }

  isControlValid(control: string) {
    return this.form.controls[control].valid;
  }
}
