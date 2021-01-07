import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationComponent } from './application.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: ApplicationComponent },
  { path: 'app/user', component: UserComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
