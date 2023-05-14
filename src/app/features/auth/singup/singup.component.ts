import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit{

  formSingIn!: FormGroup;

  counter: number = 5;
  show = false;
  constructor(private router: Router,private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formSingIn = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    console.log('singup work')
    this.show = false;
  }

private formsall(){
  
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
  

}
