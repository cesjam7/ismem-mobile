import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {

  messages = [];
  newMessage = '';

  constructor(private db: AngularFireDatabase) {
    this.db.list("chats/chat1", ref => ref.orderByChild('hora')).valueChanges().subscribe(data => {
      console.log(data);
      this.messages = data;
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const currentDate = new Date();
      let mensaje = {
        "hora" : currentDate.toISOString().slice(0, 19).replace("T", " "),
        "usuario" : "Cesar",
        "mensaje" : this.newMessage
      }
      this.db.list('chats/chat1').push(mensaje).then(() => {
        console.log('Chat agregado correctamente!');
      })
    }
  }

}
