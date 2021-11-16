import { Component, OnInit } from '@angular/core';
import { actividad } from 'src/app/models/actividad.model';

@Component({
  selector: 'app-hidrologia',
  templateUrl: './hidrologia.component.html',
  styleUrls: ['./hidrologia.component.css']
})
export class HidrologiaComponent implements OnInit {

  hidrica: actividad [] = [];
  activitySelected?: actividad;

  constructor() { }

  ngOnInit(): void {
    this.hidrica.push({
      nombre: "Cuando el río suena..."
    });
    this.hidrica.push({
      nombre: "La movida del agua"
    });
    this.hidrica.push({
      nombre: "¡Qué tiempo loco!"
    });

  }

  selectedActivity(event: actividad){
    this.activitySelected = event;
  }


}
