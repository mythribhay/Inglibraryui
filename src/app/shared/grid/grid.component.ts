import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { IBooks } from '../../models/books';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  isLoader: boolean;

  books: IBooks[];
  cols: any[];
  ctx: {};


  constructor(private bookService: BookService) { }

  ngOnInit() {

    /**
     * Columns of the Grid. 
    */
    this.cols = [
      { field: 'bookId', header: 'Book ID#' },
      { field: 'bookName', header: 'Book Name' },
      { field: 'authorName', header: 'Author Name' },
      { field: 'status', header: 'Status' },
    ];
    this.isLoader = true;
    this.initGetAllBooks();
  }

  /**
   * initGetAllBooks() is used to get all the book list
  */
  initGetAllBooks() {
    this.bookService.getAllBooksGlobal();
    this.bookService.allBooksGlobal.subscribe(data => {
      this.books = data;
      setTimeout(() => {
        this.isLoader = false;
        this.ctx = { coloums: this.cols, values: this.books };
      }, 500);
    })
  }
}
