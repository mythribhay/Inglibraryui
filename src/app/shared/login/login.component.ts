import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() title: string = 'Appliaction Name';
  @Output() loginEvent = new EventEmitter();

  constructor(private _fb: FormBuilder, private userService: UserService) { }

  isLoginError: boolean = false;
  laertType: string = '';
  alertMsg: string = '';

  loginForm = this._fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {
  }

  /**
   * onSubmit() will call on registration form submit.
  */
  onSubmit(formStatus) {
    let formObj = this.loginForm.value;

    this.laertType = 'warning';
    this.alertMsg = 'Invalid Username or Password !!';

    if (formStatus == 'VALID') {
      this.isLoginError = false;
      this.userService.userLogin(formObj).subscribe(data => {
        if (data != null && data != undefined) {
          let user = JSON.parse(JSON.stringify(data))
          if (user.statusCode == 200) {
            this.isLoginError = false;
            this.loginEvent.emit(user);
          } else {
            this.alertMsg = user.message;
            this.isLoginError = true;
          }
        } else {
          this.isLoginError = true;
        }
      });
    } else {
      this.isLoginError = true;
    }
  }

  /**
   * closeAlertBox() will call on closing of alert box
  */
  closeAlertBox() {
    this.isLoginError = false;
  }
}
