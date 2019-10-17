import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDonateComponent } from './book-donate.component';
import { ProfileComponent } from '../../shared/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookDonateComponent', () => {
  let component: BookDonateComponent;
  let fixture: ComponentFixture<BookDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookDonateComponent, ProfileComponent],
      imports: [HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
