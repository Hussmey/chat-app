import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes= [
  {
    path: '',
    component:SinginComponent
  }
]

@NgModule({
  declarations: [SinginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SinginModule { }
