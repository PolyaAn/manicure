import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AdminState} from '../../../core/states/admin.state';
import {LoadNotes, LoadUsers} from '../../../core/actions/admin.actions';
import * as fromAdmin from '../../../core/selectors/admin.selectors'
import {User} from '../../interfaces/user.interface';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Notes} from '../../interfaces/notes.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  private _destroy$$: Subject<void> = new Subject(); // Создаем переменную для отслеживания уничтожения компонента

  public user$: Observable<User[]> = this._store.select(fromAdmin.getUsers); // Одписываем user$ на данные о пользователе
  public notes$: Observable<Notes[]> = this._store.select(fromAdmin.getNotes);

  constructor(
    private _store: Store<AdminState>
  ) { }

  public ngOnInit(): void {
    this._store.dispatch(new LoadUsers()); // Вызываем действие LoadUser
    this.user$.pipe(takeUntil(this._destroy$$)) // Говорим что подписка разорвется при уничтожении компонента
      .subscribe((data: User[]) => console.log(data));

    this._store.dispatch(new LoadNotes());
    this.notes$.pipe(takeUntil(this._destroy$$))
      .subscribe((data: Notes[]) => console.log(data));
  }

  public ngOnDestroy(): void { // Вызывается при уничтожении компонента
    this._destroy$$.next();
    this._destroy$$.complete();
  }

}
