import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';

import { IndexComponent } from './index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'auth', component: AuthComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
