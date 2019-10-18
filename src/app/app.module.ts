/*Default Angular module start*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/*Default Angular module end*/

/*Application components services, pipe, and directives start*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AlertComponent } from './shared/alert/alert.component';
import { LoginComponent } from './shared/login/login.component';
import { FormComponent } from './shared/form/form.component';
import { GridComponent } from './shared/grid/grid.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BookReservedComponent } from './pages/book-reserved/book-reserved.component';
import { BookDonateComponent } from './pages/book-donate/book-donate.component';
import { LoaderComponent } from './shared/loader/loader.component';
/*Application components services, pipe, and directives end*/

/*Third party modules start*/
import { DialogModule } from 'primeng/dialog';
/*Third party modules start*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    LoginComponent,
    FormComponent,
    GridComponent,
    ProfileComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserDashboardComponent,
    BookDetailComponent,
    BookReservedComponent,
    BookDonateComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
