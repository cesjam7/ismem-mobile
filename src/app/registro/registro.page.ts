import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string = "";
  password: string = "";
  error: string = "";
  
  constructor(private afAuth: AngularFireAuth) { }

  registro() {
    return this.afAuth.createUserWithEmailAndPassword (this.email, this.password)
      .then((result) => {
        console.log("Registro exitoso", result);
      }).catch((error) => {
        console.log("Error al registrar", error);
        this.error = error;
      });
  }

  ngOnInit() {
  }

}
