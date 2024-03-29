import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
{ path: '',  redirectTo: '/login', pathMatch: 'full', },
{ path: 'login', component: LoginPageComponent },
{ path: 'register', redirectTo: '/signup', pathMatch: 'full', },
{ path: 'signup', component: RegisterPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}