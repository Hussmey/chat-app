import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of, switchMap } from 'rxjs';
import { authState, Auth, createUserWithEmailAndPassword, user } from '@angular/fire/auth'
import { SinginCredentials, SingupCredentials } from './auth.modal';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private authState = new BehaviorSubject<object| null>(null);

  readonly isLoggedIn$ = authState(this.auth)

  constructor(private auth:Auth) { }


  // getUsers({displayName}: UserFirstName){
  //  return from()
  // }
  singin({email, password}: SinginCredentials){
    // this.authState.next(crdentials);
     return from(signInWithEmailAndPassword(this.auth, email,password))
  }

sinup({email, password, displayName}: SingupCredentials){
  return from(createUserWithEmailAndPassword(this.auth, email, password,)).pipe(
    switchMap(({user}) => updateProfile(user , {displayName}))
  );

}
 
getCurrentUser() {
  return this.auth.currentUser!;
}

  public signOut(){
    // const user = this.auth.currentUser;
    return from(this.auth.signOut())
  }
  
}

type SingIn = {
  email: string;
  password: string;
  displayName:string;
}