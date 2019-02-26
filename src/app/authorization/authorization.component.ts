import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.authService.logInWithEmail(this.email, this.password)
      .then((data) => {
        alert(`Вы успешно вошли, ${data.user.email}`);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        alert(error);
      })
  }

  onClickGoogle() {
    this.authService.logInWithGoogle();
  }

}
