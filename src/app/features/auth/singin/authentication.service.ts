import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, from, Observable, of, pluck, switchMap } from 'rxjs';
import { authState, Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword, user } from '@angular/fire/auth'
import { SinginCredentials, SingupCredentials } from './auth.modal';
import { updateProfile } from 'firebase/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private authState = new BehaviorSubject<object| null>(null);

  readonly isLoggedIn$ = authState(this.auth)

  constructor(private auth:Auth, private http:HttpClient) { }


  getStreamToken(){
    return this.http.post<{ token: string }>(`${environment.apiUrlFire}/createStreamToken`,{
      user: this.getCurrentUser()
    }).pipe(pluck('token'))
  }

  getCurrentUser() {
    return this.auth.currentUser!;
  }

  singin({email, password}: SinginCredentials){
     return from(signInWithEmailAndPassword(this.auth, email,password))
  }

sinup({email, password, displayName}: SingupCredentials){
  return from(createUserWithEmailAndPassword(this.auth, email, password,)).pipe(
    switchMap(({user}) => forkJoin([
      updateProfile(user , {displayName}),
      this.http.post(
        `${environment.apiUrlFire}/createStreamUser`,
        {user: {...user, displayName}}
      )
    ]))
  );

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