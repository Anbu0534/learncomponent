import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  message4:string="Test message form Parent";
  childMessage:string="";
  
// message:string="Test message from Parent";
dataMessage:string;
// childMessage:string="";
  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.currrentMessage.subscribe(message =>this.dataMessage=message)
  }

  receiveMessage($event)
  {
    this.childMessage=$event
  }
  postNewMessage(){
    this._data.newMessage("message from second component");
  }
}
