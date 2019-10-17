import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBooks } from '../models/books';
import { IBooksReserved } from '../models/bookReserved';
import { Observable, Subject, BehaviorSubject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) { }

  apiUrl: string = 'http://localhost:3000/books';

  secondApiUrl: string = 'http://10.117.189.141:9900/inglibrary';
  thirdApiUrl: string = 'http://10.117.189.56:8884/inglibrary';

  /**
   * getBooksList() is used to retrive all books list
  */
  getBooksList = (): Observable<IBooks[]> => {
    return this._http.get<IBooks[]>(this.thirdApiUrl + '/books/');
  }

  /**
   * allBooksGlobal is a global variable which holds all available books list 
  */
  allBooksGlobal: Subject<IBooks[]> = new Subject<IBooks[]>();

  /**
   * getAllBooksGlobal() is used to call getBooksList function and update the list in allBooksGlobal
  */
  getAllBooksGlobal = () => {
    this.getBooksList().subscribe(data => {
      this.allBooksGlobal.next(data);
    });
  }

  /**
   * reserveBookRequest is used to make post request to submit reserve book request
   * @param id book ID
   * @param reqObj request body
  */
  reserveBookRequest = (id, reqObj) => {
    return this._http.post(this.secondApiUrl + '/books/books/' + id, reqObj);
  }

  /**
   * gerAllReservedBookRequest is used to get ALl reserved books by user
   * @param userId User ID
  */
  gerAllReservedBookRequest = (userId): Observable<IBooksReserved[]> => {
    return this._http.get<IBooksReserved[]>(this.thirdApiUrl + '/books/' + userId);
  }

  /**
   * donateBookRequest is used to donate a book to Available for other user
   * @param reqObj Request Object which hold userId, bookName, authorName
  */
  donateBookRequest = (reqObj) => {
    return this._http.post(this.thirdApiUrl + '/books/book', reqObj);
  }
}
