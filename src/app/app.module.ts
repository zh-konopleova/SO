import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { QuestionComponent } from './question/question.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from "@angular/forms";

const firebaseConfig = {
  apiKey: "AIzaSyCqtuK_ueNOFDhFFM0AL5br2g_GgQnCmV0",
  authDomain: "myso-ccb72.firebaseapp.com",
  databaseURL: "https://myso-ccb72.firebaseio.com",
  projectId: "myso-ccb72",
  storageBucket: "myso-ccb72.appspot.com",
  messagingSenderId: "134886238768"
};

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    QuestionListComponent,
    AuthorizationComponent,
    RegistrationComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
