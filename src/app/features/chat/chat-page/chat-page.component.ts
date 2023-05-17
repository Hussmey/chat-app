import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';
import { AuthenticationService } from '../../auth/singin/authentication.service';
import { environment } from '../../../../environments/environment'
import { catchError, map, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  chatIsReady$!: Observable<boolean>;

  constructor(
    private router: Router,
    public auth:AuthenticationService,
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService, ) {
  }

ngOnInit(): void {
  this.streamI18nService.setTranslation();
  this.chatIsReady$ = this.auth.getStreamToken().pipe(
    switchMap((streamToken) => 
     this.chatService.init(
      environment.stream.key,
       this.auth.getCurrentUser().uid,
        streamToken
        )),
     switchMap(() => this.channelService.init({
      type: 'messaging',
      members: { $in: [this.auth.getCurrentUser().uid] },
     })),
      map(() => true),
      catchError (() => of(false))
        )
}

  //
    // 
  singOutFromChat() {
    this.auth.signOut().subscribe({
      next: () => this.router.navigate(['signin'])
    });
  }
  

}
