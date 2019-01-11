import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName:'',
    lastName:'',
    age: null,
    address:{
      street:'',
      city:'',
      state:''
    }
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 62,
        address: {
          street: '50 Main St',
          city: 'New York',
          state: 'US'
        },

        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 52,
        address: {
          street: '20 School Street',
          city: 'Chicago',
          state: 'US'
        },

        isActive: false,
        registered: new Date('03/11/2018 06:20:00'),
        hide: true
      },
      {
        firstName: 'Bartol',
        lastName: 'Bilankov',
        age: 27,
        address: {
          street: '40 Henry Welsh Dr',
          city: 'Toronto',
          state: 'Canada'
        },

        isActive: true,
        registered: new Date('05/03/2017 10:30:00'),
        hide: true
      }
    ];
    this.loaded = true;

    /*this.addUser({
        firstName: 'David',
        lastName: 'Jackson',
    }
    );*/
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName:'',
      lastName:'',
      age: null,
      address:{
        street:'',
        city:'',
        state:''
      }
    }
  }

  onSubmit(e){
    console.log(123);
    e.preventDefault();
  }

  fireEvent(e){
    console.log(e.target.value)
    console.log(e.type)
  }

  //toggleHide(user: User){
  // user.hide = !user.hide
  //}
}
