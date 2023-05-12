import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'singin',loadChildren:() => import('./features/auth/singin/singin.module')
    .then(m => m.SinginModule)
  },
  {
    path: 'singup',loadChildren:() => import('./features/auth/singup/singup.module')
    .then(m => m.SingupModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }