import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() receivefromParent:string;

@Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendMessage(){
    this.messageEvent.emit("Message from Child to Parent")
  }
}
