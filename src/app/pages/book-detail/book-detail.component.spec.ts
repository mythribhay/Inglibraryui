import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';
import { ProfileComponent } from '../../shared/profile/profile.component';
import { LoaderComponent } from '../../shared/loader/loader.component';

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
      declarations: [BookDetailComponent, ProfileComponent, LoaderComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
