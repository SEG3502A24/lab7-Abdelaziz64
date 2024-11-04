import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDataComponent } from './user-data/user-data.component';

export const routes: Routes = [
  { path: 'form', component: UserFormComponent },
  { path: 'data', component: UserDataComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];
