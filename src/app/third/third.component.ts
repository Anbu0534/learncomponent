import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  message:string;

  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.currrentMessage.subscribe(message =>this.message=message)
  }
postNewMessage(){
  this._data.newMessage("message from third component");
}
}
