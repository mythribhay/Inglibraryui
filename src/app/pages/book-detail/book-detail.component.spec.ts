import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { ProfileComponent } from '../../shared/profile/profile.component';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { AlertComponent } from '../../shared/alert/alert.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BookService } from '../../services/book.service';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let bookService: BookService;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailComponent, ProfileComponent, LoaderComponent, AlertComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])],
      providers: [BookService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    bookService = TestBed.get(BookService);
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getBookDetails to get Book details based on ID', () => {
    let id = 1;
    const mockBooks = [
      {
        "bookId": 1,
        "bookName": "Book1",
        "authorName": "Tushar",
        "status": "Available"
      }
    ];
    component.books = mockBooks;
    component.getBookDetails(id);
    expect(component.bookId).toBe(id);
  });

  // it('should call reserveBook to Issue a book', () => {
  //   let bookId = 1;
  //   let status = 'Available';
  //   const mockResponse = {
  //     "message": "Book reserved Successfully",
  //     "statusCode": 200,
  //     "bookIssuedId": 42
  //   };

  //   spyOn(bookService, 'reserveBookRequest').and.returnValue(of(mockResponse));
  //   component.initGetUser();

  //   component.getBookDetails(bookId);
  //   component.reserveBook(status);

  //   expect(component.alertType).toEqual('success');
  //   expect(bookService.reserveBookRequest).toHaveBeenCalled();
  // });

});
