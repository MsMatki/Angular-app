import { Component, OnInit, ViewChild } from '@angular/core';
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
    email:'',
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {

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
    this.loaded = true;

    /*this.addUser({
        firstName: 'David',
        lastName: 'Jackson',
    }
    );*/
  }

  onSubmit({value, valid}: {value: User, valid: boolean}){
    if(!valid){
      console.log('form is not valid!')
    }else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();
    }
  }


  //toggleHide(user: User){
  // user.hide = !user.hide
  //}
}
