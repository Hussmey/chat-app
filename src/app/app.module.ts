import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './features/auth/singup/singup.component';
import { FormContainerComponent } from './features/auth/form-container/form-container.component';
import { InviteButtonComponent } from './features/channels/invite-button/invite-button.component';
import { NewChannelComponent } from './features/channels/new-channel/new-channel.component';
import { ChatPageComponent } from './features/chat/chat-page/chat-page.component';
import { AngularFireModule} from '@angular/fire/compat'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SinginComponent } from './features/auth/singin/singin.component';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    SinginComponent,
    ChatPageComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
