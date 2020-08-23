import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
  private userObject = new BehaviorSubject({});
  currentUser = this.userObject.asObservable();

  constructor() { }

  // Update user object to all places
  updateUser(user: any) {
    this.userObject.next(user);
  }

  // common function to organise social user data
  socialLogin(type: string) {
    if (type === 'facebook') {

    }
  }

  // finding size of object
  sizeOfObject(obj: object) {
    let size = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  }
}
