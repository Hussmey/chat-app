import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../singin/authentication.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit{

  formSingIn!: FormGroup;
  isAlert: boolean = false;
  alertMSG: string = '';
  counter: number = 5;
  show = false;
  constructor(private router: Router,private fb: FormBuilder, private auth:AuthenticationService) {
  }

  ngOnInit(): void {
    this.formSingIn = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    console.log('singup work')
    this.show = false;
  }
  singupWithemail(){
    this.auth.sinupWithEmailAndPassword({
      email: this.formSingIn.value.email,
      password: this.formSingIn.value.password,
    }).subscribe(() => {
       this.router.navigate(['/singin']);
        console.log("got singin seccfocccly")
    }, (error:any)=> {
      this.alertMSGf(" فيه مشكلة في السيرفر دور وعد انت وياه" );
      console.log('any error')
    })

  }

  showDiv() {
    this.show = true;
    setTimeout(() => {
      this.router.navigate(['/singin']);
    }, 5000);
      // timer down from 5 to 1 
      setInterval(() => {
        if(this.counter > 0) {
          this.counter--;
        }
      }, 1000);
  }
  
  private alertMSGf(msg: string) {
    this.alertMSG = msg;
    this.isAlert = true;
    
  }
  
  closeAlert() {
    this.alertMSG = '';
    this.isAlert = false;
  }
  

}
