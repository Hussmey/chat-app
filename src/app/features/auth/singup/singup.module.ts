import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes= [
  {
    path: '',
    component:SingupComponent
  }
]

@NgModule({
  declarations: [SingupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SingupModule { }
