import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";
  
  constructor(private afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        console.log("Inicio de sesión exitoso", result);
      }).catch((error) => {
        console.log("Error al iniciar sesión", error);
      });
  }

  ngOnInit() {
  }

}
