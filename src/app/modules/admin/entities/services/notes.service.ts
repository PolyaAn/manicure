import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Notes} from '../interfaces/notes.interface';

@Injectable()
export class NotesService {

  public getNotes(): Observable<Notes[]> {
    return of([{
      userId: '228',
      time: '12:12'
      },
      {
        userId: '822',
        time: '21:21'
      }]);
  }
}
