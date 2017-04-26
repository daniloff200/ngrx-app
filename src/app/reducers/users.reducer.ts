/*Here we have AddUser, GetUsers , and EditUsers created with reducers and effects
Delete user left, as it was, just with service.
 */
import { UsersService } from '../services/user.service';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_ERROR = 'ADD_USER_ERROR';
export const EDIT_USER = 'EDIT_USER';
export const  EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_ERROR = 'EDIT_USER_ERROR';


const initialState = {
  data: [],
  pending: false,
  error: null
};

export function getUsers() {
  return {
    type: GET_USERS
  }
}

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: {
      user
    }
  }
}

export function editUser(user) {
  return {
    type: EDIT_USER,
    payload: {
      user
    },
  }
}

const service = new UsersService();

export function users( state = initialState, action ) {
  switch( action.type ) {
    case GET_USERS:
      return Object.assign({}, state, {pending: true, error: null});
    case GET_USERS_SUCCESS:
      return Object.assign({}, state, {data: action.payload, pending: false});
    case GET_USERS_ERROR:
      return Object.assign({}, state, {pending: false, error: "Error"});

    case EDIT_USER:
      return Object.assign({}, state, {pending: true, error: null});
    case EDIT_USER_SUCCESS:
      return Object.assign({}, state, {data: action.payload, pending: false});
    case EDIT_USER_ERROR:
      return Object.assign({}, state, {pending: false, error: "Error"});

    case ADD_USER:
      return  service.addUser(action.payload.user);
     // Adding new user created without effects, just to try how it should work

    default:
      return state;
  }
}
