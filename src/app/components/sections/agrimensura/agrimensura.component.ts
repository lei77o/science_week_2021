import { Component, OnInit } from '@angular/core';
import { actividad } from 'src/app/models/actividad.model';

@Component({
  selector: 'app-agrimensura',
  templateUrl: './agrimensura.component.html',
  styleUrls: ['./agrimensura.component.css']
})
export class AgrimensuraComponent implements OnInit {

  agrimensura: actividad [] = [];
  activitySelected?: actividad;

  constructor() { }

  ngOnInit(): void {
    this.agrimensura.push({
      nombre: "¡ALTA pic!",
      texto1: "Son imágenes tomadas desde el aire, a varios metros de altura, con cámaras montadas sobre el piso de un avión, en ellas vemos el paisaje como lo haría un ave en vuelo. Con la planificación de un “vuelo fotogramétrico”, se sobrevuela una zona determinada, obteniendo así varias fotografías seguidas y con cierta superposición. Son muy utilizadas para la cartografía del país, creación de mapas, geología, arqueología, estudios ambientales, de deforestación, crecimiento demográfico, de agricultura, etc. Ya que sobre ellas extraemos muchísima información además de poder realizar distintas mediciones.",
    });
    this.agrimensura.push({
      nombre: "¡A jugar en la reserva!"
    });
  }

  selectedActivity(event: actividad){
    this.activitySelected = event;
    console.log(this.activitySelected);
  }

}
