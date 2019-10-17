import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IUsers } from '../models/users';

import { UserService } from './user.service';


describe('UserService', () => {

  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [UserService]
    });

    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should call addUserRecord() to add user via POST request', () => {
    const mockRequestBody = {
      "UserName": "Tushar Das",
      "email": "tushar82das@gmail.com",
      "password": "test@123",
      "contact": "7377163666"
    };

    const mockResponseBody = {
      "message": "success",
      "statusCode": 200
    };

    service.addUserRecord(mockRequestBody).subscribe(users => {
      expect(users).toEqual(mockResponseBody);
    });
    const mockRequest = httpMock.expectOne(`${service.secondApiUrl}/user/register`);
    expect(mockRequest.request.method).toBe('POST');
    mockRequest.flush(mockResponseBody);

  });

  it('should call getUserDetails() to retrive user details via GET request', () => {
    const userId = 1;
    const mockResponseBody: IUsers = {
      "userId": 1,
      "userName": "Tushar",
      "email": "tushar@gmail.com",
      "contact": "098887878"
    };

    service.getUserDetails(userId).subscribe(user => {
      expect(user).toEqual(mockResponseBody);
    });
    const mockRequest = httpMock.expectOne(`${service.secondApiUrl}/users/${userId}`);
    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(mockResponseBody);

  });

});
