import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisterComponent } from './user-register.component';
import { FormComponent } from '../../shared/form/form.component';
import { AlertComponent } from '../../shared/alert/alert.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { UserService } from '../../services/user.service';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

describe('UserRegisterComponent', () => {
  let component: UserRegisterComponent;
  let fixture: ComponentFixture<UserRegisterComponent>;
  let userService: UserService;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserRegisterComponent, AlertComponent, FormComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterComponent);
    component = fixture.componentInstance;

    userService = TestBed.get(UserService);
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addUserRecord to add new users if Form data is Valid', () => {
    const registerForm = new FormGroup({
      userName: new FormControl('Tushar '),
      email: new FormControl('tushar@gmail.com'),
      password: new FormControl('test@123'),
      contact: new FormControl('099898776'),
    });

    const mockResponse = {
      message: "success",
      statusCode: 200
    };

    spyOn(userService, 'addUserRecord').and.returnValue(of(mockResponse));

    component.addUserRecord(registerForm);

    expect(component.alertType).toEqual('success');
    expect(userService.getUserDetails).toHaveBeenCalled();
  });

  it('should call addUserRecord to add new users if Form data is inValid', () => {
    const registerForm = new FormGroup({
      userName: new FormControl('Tushar '),
      email: new FormControl('tushar@gmail.com'),
      password: new FormControl('test@123'),
      contact: new FormControl('099898776'),
    });

    const mockResponse = {
      message: "fail",
      statusCode: 500
    };

    spyOn(userService, 'addUserRecord').and.returnValue(of(mockResponse));

    component.addUserRecord(registerForm);

    expect(component.alertType).toEqual('warning');
    expect(userService.getUserDetails).toHaveBeenCalled();
  });

  it('should call closeAlertBox to close the Alert box', () => {
    component.closeAlertBox();
    expect(component.isShowAlert).toBe(false);
  });

});
