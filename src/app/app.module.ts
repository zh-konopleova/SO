import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { QuestionComponent } from './question/question.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';
import { AuthService } from './auth.service';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionService } from './question.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { AdminComponent } from './admin/admin.component';
import { TagsComponent } from './tags/tags.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    QuestionListComponent,
    AuthorizationComponent,
    RegistrationComponent,
    QuestionComponent,
    QuestionFormComponent,
    SpinnerComponent,
    AdminComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, AuthGuard, UnauthGuard, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
