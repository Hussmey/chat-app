import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authfair: AngularFireAuth) { }

sinupWithEmailAndPassword(params: SingIn){
  return from(this.authfair.createUserWithEmailAndPassword(params.email, params.password))

}
  singin(params: SingIn): Observable<any> {
    return from(this.authfair.signInWithEmailAndPassword(params.email, params.password))
  }

  forgetPasswordFromFirebase(email: string): Observable<void>{
    return from(this.authfair.sendPasswordResetEmail(email));
  }
}

type SingIn = {
  email: string;
  password: string
}