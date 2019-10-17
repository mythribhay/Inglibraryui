import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { IBooks } from '../../models/books';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {
    this.initGetAllBooks();
  }

  userSession;

  isLoader: boolean;
  isIssued: boolean = false;
  isReserve: boolean = false;
  isDisable: boolean = false;

  isAlert: boolean = false;
  alertType: string = '';
  alertMsg: string = '';

  books: IBooks[];

  bookId: number;
  bookName: string;
  authorName: string;
  status: string;

  ngOnInit() {
    this.isLoader = true;
    let bookId = this.activatedRoute.snapshot.params['id'];
    this.initGetUser();
    setTimeout(() => {
      console.log(this.books);
      this.getBookDetails(bookId);
    }, 1000);

  }

  /**
   * initGetUser() is used to get user detail from localStorage
  */
  initGetUser = () => {
    this.userSession = JSON.parse(localStorage.getItem('user'));
  }

  /**
   * initGetAllBooks() is used to get all the book list
  */
  initGetAllBooks() {
    this.bookService.getAllBooksGlobal();
    this.bookService.allBooksGlobal.subscribe(data => {
      this.books = data;
    })
  }

  /**
   * getBookDetails() is used to submit reserve/pre-reserve Book request
   * @param id selected book ID
  */
  getBookDetails = (id) => {
    this.books.filter(data => {
      if (data.bookId == id) {
        this.bookId = data.bookId;
        this.bookName = data.bookName;
        this.authorName = data.authorName;
        this.status = data.status;

        if (this.status == 'Available') {
          this.isIssued = true;
        } else if (this.status == 'Issued') {
          this.isReserve = true;
        } else {
          this.isIssued = true;
          this.isDisable = true;
        }

        this.isLoader = false;
      }
    });
  }

  /**
   * reserveBook() is used to submit reserve/pre-reserve Book request
   * @param {string} status current status of the selected book
  */
  reserveBook = (status: string) => {
    let reqObj = {
      userId: this.userSession.userId,
      status: status
    }

    this.bookService.reserveBookRequest(this.bookId, reqObj).subscribe(data => {
      if (data != null && data != undefined) {
        let res = JSON.parse(JSON.stringify(data));
        if (res.statusCode == 200) {
          this.isDisable = true;
          this.isAlert = true;
          this.alertType = 'success';
          this.alertMsg = res.message + ' !! Issued ID: ' + res.bookIssuedId;
        } else {
          this.isAlert = true;
          this.alertType = 'warning';
          this.alertMsg = res.message;
        }
      }
    });
  }

  /**
   * closeAlertBox() will call on closing of alert box
  */
  closeAlertBox() {
    this.isAlert = false;
  }

}
