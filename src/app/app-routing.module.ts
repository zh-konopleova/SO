import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { QuestionComponent } from './question/question.component';
import { AuthorizationGuard } from './authorization.guard';

const routes: Routes = [
  {path: '', component: QuestionListComponent},
  {path: 'login', component: AuthorizationComponent, canActivate: [AuthorizationGuard]},
  {path: 'signup', component: RegistrationComponent},
  {path: 'question/1', component: QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
