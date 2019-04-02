import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    user: User;
    constructor(public afAuth: AngularFireAuth, public router: Router) { 
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                localStorage.setItem('user', JSON.stringify(this.user));
            } else {
                localStorage.setItem('user', null);

            }
        });

    }

    async loginEmail(email: string, password: string) {
        try {
            await this.afAuth.auth.signInWithEmailAndPassword(email, password)
            this.router.navigate(['Home']);
        } catch (e) {
            alert("Error - " + e.message);
        }
    }

    async loginGoogle(email: string, password: string) {
        try {
            let provider = new auth.GoogleAuthProvider;
            await this.afAuth.auth.signInWithRedirect(provider)
            this.router.navigate(['Home']);
        } catch (e) {
            alert("Error - " + e.message);
        }
    }



    async register(email: string, password: string) {
        try {
            await this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
        } catch (e) {
            alert("Error - " + e.message);
        }
    }

    async logout() {
        await this.afAuth.auth.signOut();
        localStorage.removeItem('user');
        this.router.navigate(['Login']);
    }

    //get isLoggedIn(): boolean {
        
    //    const user = this.afAuth.auth.currentUser.displayName;
    //    return user !== null;
    //}

    get username(): string {
        return this.afAuth.auth.currentUser.email;
        //const user = JSON.parse(localStorage.getItem('user'));
        //return user.displayName;
    }
}
