import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';

import { users }from './users.reducer';

export default compose(storeLogger(), combineReducers)({
  users
});
