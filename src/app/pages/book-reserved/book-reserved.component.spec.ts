import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReservedComponent } from './book-reserved.component';
import { ProfileComponent } from '../../shared/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookReservedComponent', () => {
  let component: BookReservedComponent;
  let fixture: ComponentFixture<BookReservedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookReservedComponent, ProfileComponent],
      imports: [HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
