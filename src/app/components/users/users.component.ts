import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;

  constructor() { }

  ngOnInit() {
    
    this.users = [
     /* {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address:{
            street: '50 Main St',
            city: 'New York',
            state: 'US'
        }
    },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 52,
        address:{
            street: '20 School Street',
            city: 'Chicago',
            state: 'US'
        }
    },
    {
      firstName: 'Bartol',
      lastName: 'Bilankov',
      age: 27,
      address:{
          street: '40 Henry Welsh Dr',
          city: 'Toronto',
          state: 'Canada'
      }
  }*/
    ];

    this.showExtended = false;

   /* this.addUser({
        firstName: 'David',
        lastName: 'Jackson',
        age: 20,
        address:{
            street: '12 Martin Square',
            city: 'London',
            state: 'England'
        }
    }
    );*/
  }

  addUser(user: User){
    this.users.push(user);
  }
    

}