import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { actividad } from 'src/app/models/actividad.model';

@Component({
  selector: 'app-agrimensura',
  templateUrl: './agrimensura.component.html',
  styleUrls: ['./agrimensura.component.css']
})
export class AgrimensuraComponent implements OnInit {

  agrimensura: actividad [] = [];
  activitySelected?: actividad;
  url: string = "";
  urlSafe: SafeResourceUrl = "";
  aux: string [] = [];

  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.aux.push("./assets/images/agrimensura/2.jpg");
    this.aux.push("./assets/images/agrimensura/9.jpg");
    this.agrimensura.push({
      nombre: "¡ALTA pic!",
      texto1: "Son imágenes tomadas desde el aire, a varios metros de altura, con cámaras montadas sobre el piso de un avión, en ellas vemos el paisaje como lo haría un ave en vuelo. Con la planificación de un “vuelo fotogramétrico”, se sobrevuela una zona determinada, obteniendo así varias fotografías seguidas y con cierta superposición. Son muy utilizadas para la cartografía del país, creación de mapas, geología, arqueología, estudios ambientales, de deforestación, crecimiento demográfico, de agricultura, etc. Ya que sobre ellas extraemos muchísima información además de poder realizar distintas mediciones.",
      url: "https://es.educaplay.com/juego/10867859-reconoce_las_diferencias.html",
      img: this.aux,
    });
    this.agrimensura.push({
      nombre: "¡A jugar en la reserva!",
      url: "https://www.jigsawplanet.com/?rc=play&amp;pid=116e2c8f038f&amp;view=iframe&amp;bgcolor=0xE58F01"

    });

  }

  selectedActivity(event: actividad){
    this.activitySelected = event;
    if(this.activitySelected.url != null){
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.activitySelected.url);
    }
  }

}
