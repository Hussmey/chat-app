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
  },
  {
    path: 'chat-all',loadChildren:() => import('./features/chat/chat-page/chat.module')
    .then(m => m.ChatModule)
  }


  // { path : '', pathMatch:'full', redirectTo: 'singin'},
  // { path : 'singin',component:SinginComponent},
  // { path : 'singup',component:SingupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
