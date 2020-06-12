import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {User} from '../../entities/interfaces/user.interface';
import {adminActions, LoadNotes, LoadNotesSuccess, LoadUsers, LoadUsersSuccess} from '../actions/admin.actions';
import {map, switchMap} from 'rxjs/operators';
import {UserService} from '../../entities/services/user.service';
import {NotesService} from '../../entities/services/notes.service';
import {Notes} from '../../entities/interfaces/notes.interface';

@Injectable()
export class AdminEffects {


  @Effect()
  // @ts-ignore
  public loadUsers: Observable<User[]> = this._actions
    .pipe(
      ofType<LoadUsers>(adminActions.LOAD_USERS),
      switchMap(() =>
      this._userService.getClients()
        .pipe(
          map((data: User[]) => {
            return (new LoadUsersSuccess(data));
          })
        ))
    );

  @Effect()
  // @ts-ignore
  public loadNotes: Observable<Notes[]> = this._actions
    .pipe(
      ofType<LoadNotes>(adminActions.LOAD_NOTES),
      switchMap(() =>
      this._notesService.getNotes()
        .pipe(
          map((data: Notes[]) => {
            return (new LoadNotesSuccess(data));
          })
        ))
    );

  constructor(
    private _actions: Actions,
    private _userService: UserService,
    private _notesService: NotesService
  ) {
  }
}
