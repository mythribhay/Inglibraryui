import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { IBooksReserved } from '../../models/bookReserved';

@Component({
  selector: 'app-book-reserved',
  templateUrl: './book-reserved.component.html',
  styleUrls: ['./book-reserved.component.css']
})
export class BookReservedComponent implements OnInit {

  constructor(private bookService: BookService) { }

  userSession;

  resrevedBooks: IBooksReserved[];

  ngOnInit() {
    this.initGetUser();
    this.initGetALlReservedBooks(this.userSession.userId);
  }

  /**
   * initGetUser() is used to get user detail from localStorage
  */
  initGetUser = () => {
    this.userSession = JSON.parse(localStorage.getItem('user'));
  }

  /**
   * initGetALlReservedBooks returns all the reserved books list and update resrevedBooks
   * @param {string} userId user ID of the user
  */
  initGetALlReservedBooks = (userId) => {
    this.bookService.gerAllReservedBookRequest(userId).subscribe(data => {
      this.resrevedBooks = data;
    });
  }

}
