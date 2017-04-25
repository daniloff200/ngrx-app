import { Component, OnInit, ViewChild} from '@angular/core';
// import {UserModalComponent} from '../user-modal/user-modal.component'
import { ModalDirective } from 'ng2-bootstrap/modal';

import { User } from '../models/user.model';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  //@ViewChild('userAddModaL') public userAddModal:ModalDirective;

  users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  editUser(user) {
    this.users = this.usersService.editUser(user);
  }

  deleteUser(user) {
    this.users = this.usersService.deleteUser(user.id);
  }

  addUser() {
   // this.userAddModal.showChildModal();
  }
}
