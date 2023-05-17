import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../auth/singin/authentication.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent {

  constructor(private router: Router, public auth:AuthenticationService, ) {
  }

  singOutFromChat() {
    this.auth.signOut().subscribe({
      next: () => this.router.navigate(['signin'])
    });
  }
  

}
