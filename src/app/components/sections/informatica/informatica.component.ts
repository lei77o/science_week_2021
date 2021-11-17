import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  jugar: boolean = false;
  pdfUrl: SafeResourceUrl= "";

  constructor(public sanitizer: DomSanitizer, private router: Router) {
   }

  ngOnInit(): void {
    this.informatica.push({
      nombre: "¡A mover el esqueleto!",
      titulo1:"¿Qué es la realidad aumentada?",
      texto1:"La realidad aumentada es un tipo de tecnología que superpone imágenes virtuales sobre una imagen de la realidad obtenida a través de una pantalla. Uno de los ejemplos más conocidos de realidad aumentada es el juego Pokemon GO. Este juego dio a conocer la tecnología de la Realidad Aumentada a nivel mundial.",
      texto2:"En esta actividad te proponemos ubicar en el lugar correcto los diferentes huesos que componen el cuerpo humano. Para ello, dispones de un conjunto de tarjetas con los nombres de cada hueso, que puedes descargar e imprimir. Al colocar cada tarjeta delante de la cámara del dispositivo, la aplicación las reconocerá y proyectará en la pantalla un modelo 3D de esos huesos mediante realidad aumentada.",
      pdf:"https://drive.google.com/file/d/13Z00WifUCcfGHaLjLLxLWtr6zetcVpZX/preview",
    })
    this.informatica.push({
      nombre: "Alumna ejemplar",
      titulo1:"Redes neuronales",
      texto1: "Las redes neuronales son sistemas artificiales que simulan el funcionamiento de las células de nuestro cerebro para resolver distintos problemas. Para eso, es necesario mostrarles ejemplos correctos e incorrectos de la tarea que queremos resolver, y permitirles que aprendan por sí mismas a partir de esa información. Las redes neuronales artificiales están en más lugares de los que te imaginás. Forman parte de nuestros celulares y se encargan de entender lo que decimos y escribirlo, nos permiten hacer traducciones entre idiomas al instante, y le dan vida a muchos personajes contra los que luchamos en los videojuegos.",
      texto2:"Explorar el uso de una herramienta que te permitirá jugar con una red neuronal para ver si es capaz de interpretar correctamente lo que le estás mostrando. ¿Te animás al desafío?",
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
    if (this.activitySelected.pdf != null){
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.activitySelected.pdf);
    }
  } 

  play(){
    if(this.jugar){
      this.jugar = false;
    }
    else{ this.jugar = true;}
  }

  navigate(){
    this.router.navigateByUrl('https://sinc.unl.edu.ar/recorrido/app-gerard/index.html');
  }

}
