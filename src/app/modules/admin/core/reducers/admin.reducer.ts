import {adminInitialState, AdminState} from '../states/admin.state';
import {adminActions, AdminActions} from '../actions/admin.actions';

export function adminReducer(
  state: AdminState = adminInitialState,
  action: AdminActions
): AdminState {
  switch (action.type) {
    case adminActions.LOAD_USERS:
      return {
        ...state
      };
    case adminActions.LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.users
      };
    case adminActions.LOAD_NOTES:
      return {
        ...state
      };
    case adminActions.LOAD_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.notes
      };
    default:
      return state;
  }
}
