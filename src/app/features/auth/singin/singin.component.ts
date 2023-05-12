import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {

  counter: number = 5;
  show = false;
  constructor(private router: Router) {}


  showDiv() {
    this.show = true;
    setTimeout(() => {
      this.router.navigate(['/singup']);
    }, 5000);
      // timer down from 5 to 1 
      setInterval(() => {
        if(this.counter > 0) {
          this.counter--;
        }
      }, 1000);
  }
  

}

