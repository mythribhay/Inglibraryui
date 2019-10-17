import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  /**
   * title holds the fooert title message 
  */
  title: string = 'Developed By Mavericks';

  ngOnInit() {
  }

}
