import { Injectable } from '@angular/core';
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[]

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

   getUsers(): User[]{
     console.log('fetching users from service')
     return this.users;
   }


   addUser(user: User){
    this.users.unshift(user);
   }
}
