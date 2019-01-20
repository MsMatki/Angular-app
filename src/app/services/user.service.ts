import { Injectable } from '@angular/core';
import {Observable, of, from } from 'rxjs';

import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  data: Observable<any>

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email:'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email:'kevin@gmail.com',
        isActive: false,
        registered: new Date('03/11/2018 06:20:00'),
        hide: true
      },
      {
        firstName: 'Bartol',
        lastName: 'Bilankov',
        email:'bartol.bilankov@gmail.com',
        isActive: true,
        registered: new Date('05/03/2017 10:30:00'),
        hide: true
      }
    ];
   }

   getData(){
     this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
     });

     return this.data;
   }

   getUsers(): Observable<User[]> {
     return of(this.users);
   }


   addUser(user: User){
    this.users.unshift(user);
   }
}
