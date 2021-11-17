import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { actividad } from 'src/app/models/actividad.model';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.component.html',
  styleUrls: ['./informatica.component.css']
})
export class InformaticaComponent implements OnInit {

  informatica: actividad[]=[];
  activitySelected?: actividad;
  url: string = "";
  urlSafe: SafeResourceUrl = "";
  videoUrl: SafeResourceUrl = "";

  constructor(public sanitizer: DomSanitizer) {
   }

  ngOnInit(): void {
    this.informatica.push({
      nombre: "¡A mover el esqueleto!"
    })
    this.informatica.push({
      nombre: "Alumno ejemplar",
      texto1: "Las redes neuronales son sistemas artificiales que simulan el funcionamiento de las células de nuestro cerebro para resolver distintos problemas. Para eso, es necesario mostrarles ejemplos correctos e incorrectos de la tarea que queremos resolver, y permitirles que aprendan por sí mismas a partir de esa información.\n Las redes neuronales artificiales están en más lugares de los que te imaginás. Forman parte de nuestros celulares y se encargan de entender lo que decimos y escribirlo, nos permiten hacer traducciones entre idiomas al instante, y le dan vida a muchos personajes contra los que luchamos en los videojuegos. \n En esta actividad te proponemos que explores una herramienta que te permitirá jugar con una red neuronal para ver si es capaz de resolver algunos problemas que le propongas. ¿Te animás al desafío?",
    });    
  }

  selectedActivity(event: actividad){
    this.activitySelected = event;
    if(this.activitySelected.url != null){
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.activitySelected.url);
    }
    if (this.activitySelected.videoUrl != null){
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.activitySelected.videoUrl);
    }
  } 

}
