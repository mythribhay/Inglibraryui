import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }
  /**
   * Title of the login page
  */
  title: string = 'User Login';

  ngOnInit() {
  }

  /**
   * onLoginSuccess() will call when login successfull.
  */
  onLoginSuccess(userData) {
    let userObj = {
      "userId": userData.userId
    }
    localStorage.setItem("user", JSON.stringify(userObj));
    this.userService.updateLoginStatus(true);
    this.router.navigate(['/dashboard']);
  }

}
