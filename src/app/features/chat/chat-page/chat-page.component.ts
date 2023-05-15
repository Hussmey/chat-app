import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../auth/singin/authentication.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent {

  constructor(private router: Router, private auth:AuthenticationService) {
  }


  singOutFromChat(){
    this.auth.signOut().then(() => {
      this.router.navigate(['/singin']);
      console.log('logout good');
    });

    console.log("go out");
  }

}
