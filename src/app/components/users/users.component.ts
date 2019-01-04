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
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};

  constructor() { }

  ngOnInit() {

      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 62,
          address:{
              street: '50 Main St',
              city: 'New York',
              state: 'US'
          },
          image:'http://lorempixel.com/600/600/people/3',
          isActive: true,
          balance:100,
          registered:new Date('01/02/2019 08:30:00')
      },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 52,
          address:{
              street: '20 School Street',
              city: 'Chicago',
              state: 'US'
          },
          image:'http://lorempixel.com/600/600/people/2',
          isActive:false,
          balance:200,
          registered:new Date('03/11/2018 06:20:00')
      },
      {
        firstName: 'Bartol',
        lastName: 'Bilankov',
        age: 27,
        address:{
            street: '40 Henry Welsh Dr',
            city: 'Toronto',
            state: 'Canada'
        },
        image:'http://lorempixel.com/600/600/people/1',
        isActive: true,
        balance:50,
        registered:new Date('05/03/2017 10:30:00')
    }
      ];
      this.loaded = true;

    /*this.addUser({
        firstName: 'David',
        lastName: 'Jackson',
    }
    );*/

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User){
    this.users.push(user);
  }
    
  setCurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles(){
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size' : this.showExtended ? '' : '40px',
    }
  }

}
