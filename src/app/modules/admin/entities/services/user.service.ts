import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../interfaces/user.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  // Отправляем МОК данные, так как нет сервера
  public getClients(): Observable<User[]> {
    return of([
      {
        name: 'Sergey',
        surname: 'Pezhemsky',
        phoneNumber: '8-800-555-35-35',
        vkLink: 'vk.com/id0',
        isRguStudent: true,
        numberOfVisits: 337
      }
    ]);
  }
}
