import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private messageSource= new BehaviorSubject("DefaultData");
currrentMessage=this.messageSource.asObservable();

  constructor() { }
  newMessage(message:string)
  {
    this.messageSource.next(message)
  }
  
}
