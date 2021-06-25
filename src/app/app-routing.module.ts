import { HomeGuard } from './core/guard-router/home/home.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { AuthGuard } from './core/guard-router/auth/auth.guard';

const routes: Routes = [
  {
   path: '',
   pathMatch: 'full',
   redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then((m) => m.AuthModule),
    canLoad: [HomeGuard]
  },
  {
    path: 'TaskAdimin',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
