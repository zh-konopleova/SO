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
import { FormsModule } from "@angular/forms";
import { AuthorizationGuard } from './authorization.guard';
import { AuthService } from './auth.service';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionService } from './question.service';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    QuestionListComponent,
    AuthorizationComponent,
    RegistrationComponent,
    QuestionComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, AuthorizationGuard, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
