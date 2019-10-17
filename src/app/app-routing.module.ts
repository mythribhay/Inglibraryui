import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BookReservedComponent } from './pages/book-reserved/book-reserved.component';
import { BookDonateComponent } from './pages/book-donate/book-donate.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'book-reserved', component: BookReservedComponent },
  { path: 'book-donate', component: BookDonateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
