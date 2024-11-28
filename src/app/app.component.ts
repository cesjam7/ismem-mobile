import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Noticias', url: '/folder/noticias', icon: 'newspaper' },
    { title: 'Estudiantes', url: '/folder/estudiantes', icon: 'people' },
    { title: 'Notas', url: '/folder/notas', icon: 'calculator' },
    { title: 'Eventos', url: '/folder/eventos', icon: 'calendar-clear' },
    { title: 'Horario', url: '/folder/horario', icon: 'time' },
    { title: 'Docentes', url: '/folder/docentes', icon: 'people-circle' },
    { title: 'Chat', url: '/folder/chat', icon: 'chatbubbles' },
  ];
  public labels = [];
  constructor() {}
}