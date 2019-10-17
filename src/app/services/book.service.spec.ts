import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookService } from './book.service';
import { IBooks } from '../models/books';

describe('BookService', () => {
  let service: BookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    });

    service = TestBed.get(BookService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });

  it('should call getBooksList() to retrive all books list via GET request', () => {
    const mockResponseBody: IBooks[] = [
      {
        "bookId": 1,
        "bookName": "Half Girlfriend",
        "authorName": "Tushar Das",
        "status": "Available"
      }
    ];

    service.getBooksList().subscribe(books => {
      expect(books).toEqual(mockResponseBody);
    });
    const mockRequest = httpMock.expectOne(`${service.thirdApiUrl}/books/`);
    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(mockResponseBody);
  });

  it('should call reserveBookRequest() to reserve a books via POST request', () => {
    let id = 1;
    const reqObj = {
      "bookId": 1,
      "status": "Available"
    }
    const mockResponseBody = {
      "message": "success",
      "statusCode": 200
    };

    service.reserveBookRequest(id, reqObj).subscribe(books => {
      expect(books).toEqual(mockResponseBody);
    });
    const mockRequest = httpMock.expectOne(`${service.thirdApiUrl}/books/${id}`);
    expect(mockRequest.request.method).toBe('POST');
    mockRequest.flush(mockResponseBody);
  });

});
