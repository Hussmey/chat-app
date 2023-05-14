import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from './chat-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes= [
  {
    path: '',
    component:ChatPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ChatModule { }
