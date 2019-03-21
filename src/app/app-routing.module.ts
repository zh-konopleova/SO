import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { QuestionComponent } from './question/question.component';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';
import { QuestionFormComponent } from './question-form/question-form.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: '', component: QuestionListComponent},
  {path: 'login', component: AuthorizationComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: RegistrationComponent, canActivate: [AuthGuard]},
  {path: 'question/:id', component: QuestionComponent},
  {path: 'question-form', component: QuestionFormComponent, canActivate: [UnauthGuard]},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
