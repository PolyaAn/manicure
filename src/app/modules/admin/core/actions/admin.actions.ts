import {Action} from '@ngrx/store';
import {User} from '../../entities/interfaces/user.interface';
import {Notes} from '../../entities/interfaces/notes.interface';

export enum adminActions {
  LOAD_USERS = '[admin] Загрузка пользователей',
  LOAD_USERS_SUCCESS = '[admin] Загрузка пользователей - Успех',
  LOAD_NOTES = '[admin] Загрузка записей',
  LOAD_NOTES_SUCCESS = '[admin] Загрузка записей - Успех'
}

export class LoadUsers implements Action {
  public readonly type: adminActions.LOAD_USERS = adminActions.LOAD_USERS;

  constructor() {
  }
}

export class LoadUsersSuccess implements Action {
  public readonly type: adminActions.LOAD_USERS_SUCCESS = adminActions.LOAD_USERS_SUCCESS;

  constructor(
    public users: User[]
  ) {
  }
}

export class LoadNotes implements Action {
  public readonly type: adminActions.LOAD_NOTES = adminActions.LOAD_NOTES;

  constructor() {}
}

export class LoadNotesSuccess implements Action {
  public readonly type: adminActions.LOAD_NOTES_SUCCESS = adminActions.LOAD_NOTES_SUCCESS;

  constructor(
    public notes: Notes[]
  ) {
  }

}

export type AdminActions =
    LoadUsers
  | LoadUsersSuccess
  | LoadNotes
  | LoadNotesSuccess;
