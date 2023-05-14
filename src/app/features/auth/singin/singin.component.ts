import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  formSingIn!: FormGroup;
  counter: number = 5;
  show = false;
  constructor(private router: Router,private fb: FormBuilder) {}


  ngOnInit(): void {
    this.formSingIn = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: ['', [Validators.required],Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]
    });
    console.log('singin work')
    this.show = false;
  }

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

