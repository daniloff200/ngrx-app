import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';
import { UsersService } from '../services/user.service';
import { Store } from '@ngrx/store';
import { getUsers, editUser, addUser } from '../reducers/users.reducer';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService, private store: Store<any>) {
  }

  ngOnInit() {
    //this.users = this.usersService.getUsers();
    this.store.dispatch(getUsers());
    this.store.select('users').subscribe((res: any) => {
      this.users = res.data
    });
  }

  editUser(user) {
    // this.users = this.usersService.editUser(user);
    this.store.dispatch(editUser(user));
    this.store.select('users').subscribe((res: any) => {
      this.users = res.data
    });
  }

  deleteUser(user) {
    this.users = this.usersService.deleteUser(user.id);
  }

  addUser() {
    let user = {
      id: 3,
      name: 'Lora',
      lastName: 'Palmer',
      sex: 'Female',
      birthday: '05.09.1987',
      email: 'PalmerL@gmail.com',
      phone: '+12345216790',
      isVip: false
    };
    // this.users = this.usersService.addUser(user);

    this.store.dispatch(addUser(user));
    this.store.select('users').subscribe((res: any) => {
      this.users = res
    });
  }
}
