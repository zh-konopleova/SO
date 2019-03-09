import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.logInWithEmail(this.email, this.password)
      .subscribe(
        (data) => {
          alert(`Вы успешно вошли, ${data.user.email}`);
          this.router.navigate(['/']);
        },
        (error) => { alert(error); }
      );

  }

  onClickGoogle(): void {
    this.authService.logInWithGoogle();
  }

}
