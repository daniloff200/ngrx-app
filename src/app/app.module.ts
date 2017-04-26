import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { ModalModule }          from 'ng2-bootstrap/modal';
import reducer from './reducers';
import { UsersService } from './services/user.service';
import { UsersEffects } from './effects';
import { AppComponent }       from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
// import { UserFormComponent } from './user-form/user-form.component';
// import { UserModalComponent } from './user-modal/user-modal.component';
import {StoreModule} from "../../node_modules/@ngrx/store/src/ng2";
import {EffectsModule} from "../../node_modules/@ngrx/effects/src/effects.module";
const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    StoreModule.provideStore(reducer),
        EffectsModule.run(UsersEffects),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
