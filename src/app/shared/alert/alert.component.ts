import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() type: string = '';
  @Input() msg: string = '';
  @Output() alertCloseEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
  * onCloseAlert function is used to close the Aler box.
  *
  */
  onCloseAlert() {
    this.alertCloseEvent.emit();
  }

}
