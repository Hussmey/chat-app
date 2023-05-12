import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinginComponent } from './features/auth/singin/singin.component';
import { SingupComponent } from './features/auth/singup/singup.component';
import { FormContainerComponent } from './features/auth/form-container/form-container.component';
import { InviteButtonComponent } from './features/channels/invite-button/invite-button.component';
import { NewChannelComponent } from './features/channels/new-channel/new-channel.component';
import { ChatPageComponent } from './features/chat/chat-page/chat-page.component';
import { AngularFireModule} from '@angular/fire/compat'


@NgModule({
  declarations: [
    AppComponent
    // SinginComponent,
    // SingupComponent,
    // FormContainerComponent,
    // InviteButtonComponent,
    // NewChannelComponent,
    // ChatPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({}),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
