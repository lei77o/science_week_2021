import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { actividad } from 'src/app/models/actividad.model';
import { ActividadesService} from '../../../services/actividades.service'

@Component({
  selector: 'app-ambiental',
  templateUrl: './ambiental.component.html',
  styleUrls: ['./ambiental.component.css']
})
export class AmbientalComponent implements OnInit {

  ambiental: actividad [] = [];
  activitySelected?: actividad;
  url: string = "";
  urlSafe: SafeResourceUrl = "";
  videoUrl: SafeResourceUrl = "";
  images: string [] = [];

  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit(): void {

    this.ambiental.push({
      nombre: "Vivir sin árboles",
      texto1: "La deforestación es una problemática ambiental muy preocupante porque deja al suelo desprovisto de la capa protectora de la vegetación, lo que acarrea diversos problemas para el medio natural y social. Aquí les proponemos comparar y analizar los procesos físicos que ocurren cuando cae agua de lluvia sobre un suelo con vegetación y otro suelo sin vegetación.",
      texto2: "Impacto de la deforestación en el proceso de infiltración de agua de lluvia.",
      videoUrl: "https://www.youtube.com/embed/LIFmUBAC50w",
    });
    this.images.push("./assets/images/ambiental/colores.png");
    this.ambiental.push(  {
      nombre: "Química en casa",
      texto1: "El pH es la medida que sirve para decir si una sustancia es ácida o no. Con esta experiencia podrán producir un colorante para determinar el pH, y medirlo en productos que utilizamos comúnmente en nuestros hogares, como por ejemplo, artículos de limpieza, ingredientes de cocina, productos de higiene personal, agua de piscinas, entre otros.",
      img: this.images
    });
    this.images = new Array();
    this.images.push("./assets/images/ambiental/Horno.png");
    this.ambiental.push({
      nombre: "Hoy cocina el sol",
      texto1: "La energía solar es una de las fuentes de energía renovables más versátil porque sirve para generar energía eléctrica, climatizar ambientes interiores, calentar agua, cocinar alimentos, etc. En esta experiencia les proponemos construir un horno solar, con materiales económicos, para aprovechar la energía del sol para hacer unos ricos bombones de chocolate.",
      img: this.images
    });
    this.ambiental.push({
      nombre: "¡Cuidado, agua ácida!",
      texto1: "La lluvia ácida y la acidificación de los océanos son dos problemas que generan impactos negativos en el medio ambiente. En esta actividad se propone mostrar el efecto de la acidificación del agua, realizando 2 experiencias de laboratorio sencillas, disolución de cáscara de huevo y de tizas blancas.",
      texto2: "La cáscara de huevo, compuesta por carbonato de calcio (o calcita), se disuelve fácilmente en agua ácida. Esto es equivalente a lo que ocurre en los monumentos o edificios con la lluvia ácida, o en los arrecifes de coral con la acidificación de los océanos. La tiza, compuesta por una mezcla de carbonato de calcio (o calcita) y sulfato de calcio, se disuelve fácilmente en agua ácida. Esto es equivalente a lo que ocurre en los monumentos o edificios con la lluvia ácida, o en los arrecifes de coral con la acidificación de los océanos.",
      videoUrl: "https://www.youtube.com/embed/mBhGpYehgT4",
    });
    this.ambiental.push({
      nombre: "¡No se puede respirar!", 
      texto1: "En esta actividad se propone mostrar y pensar el efecto de la contaminación atmosférica en la calidad del agua de lluvia, mediante una experiencia sencilla que puede realizarse con elementos disponibles en sus hogares."   ,
      texto2: "Los procesos que implican combustión, tanto en industrias como en automóviles y calefacciones residenciales, generan emisiones de diferentes sustancias que contaminan la atmósfera. Estas emisiones de partículas y gases al entrar en contacto con el agua de lluvia, generan la conocida lluvia ácida.",
      videoUrl: "https://www.youtube.com/embed/sGH6ZTMrkzs",
    });
    this.ambiental.push({
      nombre: "Limpiemos el agua",
      texto1: "Las actividades humanas causan diversos problemas ambientales, entre ellos la degradación de la calidad del agua debido a los efluentes contaminados que llegan a los ríos, lagos, arroyos y océanos. En esta actividad se propone mostrar un ejemplo práctico de tratamiento de agua contaminada.",
      texto2: "En la experiencia, el agua se encuentra contaminada con un colorante y luego es tratada mediante la introducción de carbón activado, un compuesto absorbente que se utiliza en las plantas de tratamiento de efluentes.",
      videoUrl: "https://www.youtube.com/embed/IqTuG3NmyuM",
    });
    this.ambiental.push( {
      nombre: "S.O.S aguas calientes",
      texto1: "En esta actividad les proponemos observar qué ocurre cuando mezclamos aguas a diferentes temperaturas, simulando lo que ocurre cuando se vierten efluentes a distintos cuerpos de agua, como por ejemplo los ríos.",
      texto2: "El agua (o los efluentes) a temperatura más caliente flota, generando una capa superficial menos aireada, ya que a mayor temperatura el oxígeno tiene menor capacidad de disolución en agua, afectando la vida en el interior de dicho cuerpo de agua.",
      videoUrl:"https://www.youtube.com/embed/vtKqOcvkZYI"
    });
    this.ambiental.push( {
      nombre: "Crucigrama ambiental",
      texto1:"Si recorriste las actividades de Medio Ambiente (color verde?), te invitamos a que resuelvas un crucigrama para que pongas a prueba lo que aprendiste.",
      url: "https://es.educaplay.com/juego/10748947-crucigrama_integrador.html",
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
