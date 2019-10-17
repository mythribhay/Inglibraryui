import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { GridComponent } from './grid.component';
import { AlertComponent } from '../alert/alert.component';
import { UserService } from '../../services/user.service';
import { DialogModule } from 'primeng/dialog';
import { LoaderComponent } from '../loader/loader.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridComponent, AlertComponent, LoaderComponent],
      imports: [HttpClientModule, RouterTestingModule, DialogModule],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call initGetAllBooks() to get allbooks list and update books veriable', () => {
    component.initGetAllBooks();
    //expect(component.users.length).toBeGreaterThan(1);
  });

});
