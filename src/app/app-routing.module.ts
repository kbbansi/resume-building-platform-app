import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'application', loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
