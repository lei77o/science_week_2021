import { Component, OnInit } from '@angular/core';
import { actividad } from 'src/app/models/actividad.model';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-hidrologia',
  templateUrl: './hidrologia.component.html',
  styleUrls: ['./hidrologia.component.css']
})
export class HidrologiaComponent implements OnInit {

  hidrica: actividad [] = [];
  activitySelected?: actividad;
  url: string = "";
  urlSafe: SafeResourceUrl = "";
  videoUrl: SafeResourceUrl = "";
  pdfUrl: SafeResourceUrl= "";


  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.hidrica.push({
      nombre: "Cuando el río suena...",
      url: "https://wordwall.net/es/embed/851d1da115d84e71b01d0bbe744affe2?themeId=45&templateId=72",
      width: "500px",
      height: "380px",
      videoUrl: "https://www.youtube.com/embed/4W-d-I5LMzI",
      texto2:"Vivir, dormir o estar cerca de un río es bueno para la salud y el bienestar. Por un lado, los lugares cerca de los ríos tienen muchísima menos contaminación, la vegetación y naturaleza ayuda al sistema inmunológico y el tener acceso a río aumenta la actividad física en las personas. Lo que siempre se correlaciona con una mejor salud.   Durante siglos, se han usado los ríos por sus beneficios que incluyen el agua para las ciudades, la obtención de alimentos y con fines recreativos, pero también porque se han construido obras hidráulicas para  la generación de energía hidroeléctrica o el riego, incrementando el bienestar económico en las comunidades.\n Algunas obras hidráulicas generan grandes cambios en los ríos. Por lo que en este video vamos a visualizar algunos de los efectos que una Represa Hidroeléctrica puede generar en el comportamiento de un río. La experiencia se realiza en un canal de 2,40 metros de largo ubicado en el Laboratorio de Hidráulica de FICH.",
    });
    this.hidrica.push({
      nombre: "La movida del agua",
      titulo1: "¿Qué es el ciclo del agua?",
      texto1: "El agua es un elemento fundamental para la vida porque gracias a ella los seres vivos podemos hidratarnos, realizar nuestras funciones vitales y obtener nutrientes.\n\r    El ciclo del agua, es el proceso de transformación y circulación del agua en la Tierra. El agua existe en la Tierra en tres estados: sólido (hielo o nieve), líquido y gaseoso (vapor de agua). Océanos, ríos, nubes y lluvia están en constante cambio: el agua de la superficie se evapora, el agua de las nubes precipita, la lluvia se filtra por la tierra. Al tratarse de un viaje circular, no tiene un principio ni un fin claros, dependiendo de la fase del proceso, el agua se encontrará en un lugar u otro.\n\r",
      texto2: "A través de un video explicativo sobre el ciclo del agua primero, y de un juego de relacionar columnas después, te invitamos a adentrarte una vez más en el Ciclo del Agua. Esta sencilla propuesta te ayudará a entender conceptos como precipitación, evaporación, escorrentía, infiltración y condensación.",
      videoUrl: "https://www.youtube.com/embed/6meUBwZsPx0", 
    });
    this.hidrica.push({
      nombre: "¡Qué tiempo loco!",
      url: "https://wordwall.net/es/embed/320e30afe360492cac563c6e644c6fed?themeId=2&templateId=25",
      titulo1:"¿Qué es una estación meteorológica?",
      texto1:"Una estación meteorológica es un conjunto de herramientas de medición que ayudan a predecir el clima tanto en el momento actual como para predecirlo en un periodo corto de tiempo. Pueden estar instaladas tanto en el interior o en el exterior de la casa, dependiendo del tipo de estación meteorológica que sea.   La estación que podés observar más arriba cuenta con instrumental para medir las variables meteorológicas: temperatura, humedad, lluvia, viento, presión atmosférica, radiación solar, evaporación.",
      texto2: "En esta actividad te proponemos que aprendas a identificar para qué se utiliza cada instrumento en la estación meteorológica. ¿Podrás hacerlo?"
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


}
