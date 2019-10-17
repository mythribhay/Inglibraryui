import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from '../models/users';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

/**
 * userService is used to so the User Operations
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient, private router: Router) { }

  apiUrl: string = 'http://localhost:3000/crud-users';

  firstApiUrl: string = 'http://10.117.189.62:9900/inglibrary';
  secondApiUrl: string = 'http://10.117.189.141:9900/inglibrary';
  thirdApiUrl: string = 'http://10.117.189.56:8884/inglibrary';

  /**
  * Declare loginStatus global veriable to track the login status
  */
  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
  * This function is to update the loginStatus global veriable after changed login status
  * @param {boolean} status login status
  */
  updateLoginStatus = (status: boolean) => {
    this.loginStatus.next(status);
  }

  /**
  * checkUserLoginStatusAndRedirect function is to check user login info from localStorage and redirect the page
  */
  checkUserLoginStatusAndRedirect = () => {
    let userData = localStorage.getItem("user");
    if (userData != null && userData != undefined) {
      this.updateLoginStatus(true);
      this.router.navigate(['/dashboard']);
    } else {
      this.updateLoginStatus(false);
      this.router.navigate(['/']);
    }
  }

  /**
  * userLogin function is to check user login
  * @param {FormGroup} loginData login form Object
  */
  userLogin = (loginData) => {
    return this._http.post(this.firstApiUrl + '/login', loginData);
  }

  /**
  * addUserRecord function is to register new user
  * @param {FormGroup} userData registration form Object
  */
  addUserRecord = (userData) => {
    return this._http.post(this.secondApiUrl + '/user/register', userData);
  }

  /**
  * getUserDetails function is to return user detaild based on the given id
  * @param {number} id user ID
  */
  getUserDetails = (id): Observable<IUsers> => {
    return this._http.get<IUsers>(this.thirdApiUrl + '/users/' + id);
  }

}
