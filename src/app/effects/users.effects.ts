import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {
  GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR,
  EDIT_USER, EDIT_USER_SUCCESS, EDIT_USER_ERROR
}   from '../reducers/users.reducer';
import { UsersService } from '../services/user.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions,
              private usersService: UsersService) {
  }

  @Effect() getUsers$ = this.actions$
    .ofType(GET_USERS)
    .switchMap(action =>
      this.usersService.getUsers()
     .map(res => ({type: GET_USERS_SUCCESS, payload: res}))
        .catch(() => Observable.of({type: GET_USERS_ERROR}))

    );

  @Effect() editUser$ = this.actions$
    .ofType(EDIT_USER)
    .switchMap(action =>
      this.usersService.editUser (action.payload.user)
        .map(res => ({type: EDIT_USER_SUCCESS, payload: res}))
        .catch(() => Observable.of({type:  EDIT_USER_ERROR}))
    );



}
