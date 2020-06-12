import {User} from '../../entities/interfaces/user.interface';
import {Notes} from '../../entities/interfaces/notes.interface';

export interface AdminState {
  users: User[];
  notes: Notes[];
}

export const adminInitialState: AdminState = {
  users: null,
  notes: null
};
