import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias: any;
  
  constructor(private db: AngularFireDatabase) {
    this.getNoticias().subscribe(data => {
      console.log(data);
      this.noticias = data;
    })
  }

  getNoticias(): Observable<any[]> {
    return this.db.list("noticias").valueChanges();
  }

  ngOnInit() {
  }

}

