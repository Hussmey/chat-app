import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  isForget : boolean = false;
  isAlert: boolean = false;
  alertMSG: string = '';
  formSingIn!: FormGroup;
  counter: number = 5;
  show = false;
  constructor(private router: Router,private fb: FormBuilder, private auth:AuthenticationService) {}


  ngOnInit(): void {
    this.formSingIn = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    console.log('singin work')
    this.show = false;
    // this.router.navigate(['/chat-all']);
  }


   login(){
    this.auth.singin({
      email: this.formSingIn.value.email,
      password: this.formSingIn.value.password
    }).subscribe(() => {
       this.router.navigate(['/chat-all']);
        console.log("login seccfocccly")
    }, (error:any)=> {
      this.alertMSGf(" فيه مشكلة في السيرفر دور وعد انت وياه" );
      console.log('any error')
    })

  }

//   forgetPassword(){
// this.isForget = true;
// this.auth.forgetPasswordFromFirebase(this.formSingIn.value.email).subscribe(()=>{
//   this.isForget = false;
//   this.alertMSGf(" شوف ايميلك بعتنالك الرقكم السري" );
// }, (error:any)=> {
//   this.alertMSGf("فيه مشكلة في السيرفر دور وعد انت وياه" );
//   this.isForget = false;
//   console.log('any error')
// })

//   }
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

  private alertMSGf(msg: string) {
    this.alertMSG = msg;
    this.isAlert = true;
    
  }
  
  closeAlert() {
    this.alertMSG = '';
    this.isAlert = false;
  }
  

}

