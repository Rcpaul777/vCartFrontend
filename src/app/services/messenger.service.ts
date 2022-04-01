import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class MessengerService {

  subject = new Subject()

  constructor() { }

  getMsg() {
    return this.subject.asObservable()
  }
  sendMsg(product) {
    this.subject.next(product)

  }
}