import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinginComponent } from './features/auth/singin/singin.component';
import { SingupComponent } from './features/auth/singup/singup.component';
import { ChatPageComponent } from './features/chat/chat-page/chat-page.component';

const routes: Routes = [
 
   { path : 'singin',component:SinginComponent},
  { path : 'singup',component:SingupComponent},
    {
     path: 'chat-all',loadChildren:() => import('./features/chat/chat-page/chat.module')
     .then(m => m.ChatModule)
   }
  // { path : 'chat-all', component:ChatPageComponent}
  // {
  //   path: 'singin',loadChildren:() => import('./features/auth/singin/singin.module')
  //   .then(m => m.SinginModule)
  // },
  // {
  //   path: 'singup',loadChildren:() => import('./features/auth/singup/singup.module')
  //   .then(m => m.SingupModule)
  // },
  // {
  //   path: 'chat-all',loadChildren:() => import('./features/chat/chat-page/chat.module')
  //   .then(m => m.ChatModule)
  // }


  // { path : '', pathMatch:'full', redirectTo: 'singin'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
