import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import { UsersComponent } from './entities/components/users/users.component';
import {StoreModule} from '@ngrx/store';
import {adminReducer} from './core/reducers/admin.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AdminEffects} from './core/effects/admin.effects';
import {UserService} from './entities/services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {NotesService} from './entities/services/notes.service';

@NgModule({
  imports: [
    StoreModule.forFeature('admin', adminReducer),
    EffectsModule.forFeature([
      AdminEffects
    ]),
    HttpClientModule
  ],
  declarations: [
    AdminComponent,
    UsersComponent,
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UserService,
    NotesService
  ],
  bootstrap: [
    AdminComponent,
    UsersComponent]
})

export class AdminModule {
}
