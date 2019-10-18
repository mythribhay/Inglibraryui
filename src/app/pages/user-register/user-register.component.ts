import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private _fb: FormBuilder, private userService: UserService) { }

  isShowForm: boolean = true;
  isShowAlert: boolean = false;
  alertType: string = '';
  alertMsg: string = '';

  registerForm = this._fb.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    contact: ['', [Validators.required]]
  });

  ngOnInit() {
  }

  /**
   * params: valid
   * submitForm() method call addUserRecord method if form ststus is valid
  */
  submitForm = (valid) => {
    if (valid) {
      let formObj = this.registerForm.value;
      this.addUserRecord(formObj);
    } else {
      this.alertType = 'warning';
      this.alertMsg = 'Please Fill all the record !!';
      this.isShowAlert = true;
    }
  }

  /**
   * params: formObj
   * addUserRecord() method is used to add user data
  */
  addUserRecord(formObj) {
    this.userService.addUserRecord(formObj).subscribe(data => {
      if (data != null && data != undefined) {
        let user = JSON.parse(JSON.stringify(data));
        if (user.statusCode == 200) {
          this.isShowForm = false;
          this.alertType = 'success';
          this.alertMsg = 'User Registered Successfully !!';
          this.isShowAlert = true;
        } else {
          this.alertType = 'warning';
          this.alertMsg = user.message;
          this.isShowAlert = true;
        }
      }
    });
  }

  /**
  *closeAlertBox() method is used to close the Alert box
  */
  closeAlertBox() {
    this.isShowAlert = false;
  }

}
