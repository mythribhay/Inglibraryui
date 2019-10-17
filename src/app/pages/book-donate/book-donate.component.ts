import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-donate',
  templateUrl: './book-donate.component.html',
  styleUrls: ['./book-donate.component.css']
})
export class BookDonateComponent implements OnInit {

  constructor(private bookService: BookService, private _fb: FormBuilder) { }
  userSession;

  isShowAlert: boolean = false;
  alertType: string = '';
  alertMsg: string = '';

  /** 
   * donateBookForm is the formGroup Object of Donate Book Form
  */
  donateBookForm = this._fb.group({
    bookName: ['', [Validators.required]],
    authorName: ['', [Validators.required]]
  });

  ngOnInit() {
    this.initGetUser();
  }

  /**
   * initGetUser() is used to get user detail from localStorage
  */
  initGetUser = () => {
    this.userSession = JSON.parse(localStorage.getItem('user'));
  }

  /**
  * onSubmit will call on form submit
  * @param {boolean} valid status of the form
  */
  onSubmit(valid) {
    if (valid) {
      let reqObj = this.donateBookForm.value;
      reqObj['userId'] = this.userSession.userId;

      this.bookService.donateBookRequest(reqObj).subscribe(data => {
        if (data != null && data != undefined) {
          let res = JSON.parse(JSON.stringify(data));
          if (res.statusCode == 200) {
            this.donateBookForm.reset();
            this.isShowAlert = true;
            this.alertType = 'success';
            this.alertMsg = res.message;
          } else {
            this.isShowAlert = true;
            this.alertType = 'warning';
            this.alertMsg = res.message;
          }
        }
      });
    }
  }

  /**
  * getter for bookName field
  */
  get bookName() {
    return this.donateBookForm.get('bookName');
  }

  /**
  * getter for authorName field
  */
  get authorName() {
    return this.donateBookForm.get('authorName');
  }

  /**
  * revert method is used to reset the form values
  */
  revert() {
    this.donateBookForm.reset();
  }

}
