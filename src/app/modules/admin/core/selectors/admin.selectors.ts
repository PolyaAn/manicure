import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {AdminState} from '../states/admin.state';
import {User} from '../../entities/interfaces/user.interface';
import {Notes} from '../../entities/interfaces/notes.interface';

export const getAdminState: MemoizedSelector<object, AdminState>
  = createFeatureSelector('admin');

export const getUsers: MemoizedSelector<AdminState, User[]>
  = createSelector(getAdminState, (state: AdminState) => state.users);

export const getNotes: MemoizedSelector<AdminState, Notes[]>
  = createSelector(getAdminState, (state: AdminState) => state.notes);
