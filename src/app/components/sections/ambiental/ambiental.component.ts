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
  pdfUrl: SafeResourceUrl= "";

  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit(): void {

    this.ambiental.push({
      nombre: "Vivir sin árboles",
      titulo1:"El problema de la deforestación",
      texto1: "La deforestación es una problemática ambiental muy preocupante porque deja al suelo desprovisto de la capa protectora de la vegetación, lo que acarrea diversos problemas para el medio natural y social. Aquí les proponemos comparar y analizar los procesos físicos que ocurren cuando cae agua de lluvia sobre un suelo con vegetación y otro suelo sin vegetación.",
      texto2: "Explorar a través de un video y una actividad para experimentar solos o en la escuela el impacto de la deforestación en el proceso de infiltración de agua de lluvia. El agua que cae sobre los suelos deforestados escurre más superficialmente y a mayor velocidad, generando caudales que pueden provocar inundaciones severas pendiente abajo, y además arrastrando partículas disueltas del suelo, erosionándolo.",
      videoUrl: "https://www.youtube.com/embed/LIFmUBAC50w",
      pdf:"https://drive.google.com/file/d/1989itt9D1WUqP90ie1YOVK7vZxxMuFL-/preview",
    });
    this.images.push("./assets/images/ambiental/colores.png");
    this.ambiental.push(  {
      nombre: "Química en casa",
      titulo1:"¿Sustancias ácidas o básicas?",
      texto1: "El pH es la medida que sirve para decir si una sustancia es ácida o no. Con esta experiencia podrán producir un colorante para determinar el pH, y medirlo en productos que utilizamos comúnmente en nuestros hogares, como por ejemplo, artículos de limpieza, ingredientes de cocina, productos de higiene personal, agua de piscinas, entre otros.",
      texto2:"En esta actividad se propone un experimento para medir la acidez de diferentes sustancias con elementos disponibles en el aula/hogar.",
      pdf:"https://drive.google.com/file/d/1e3OajBaLF2gDJf0VqSFOCZ2evTEMpF6r/preview",
      img: this.images
    });
    this.images = new Array();
    this.images.push("./assets/images/ambiental/Horno.png");
    this.ambiental.push({
      nombre: "Hoy cocina el sol",
      titulo1:"¿Qué es un horno solar?",
      texto1: "El horno solar es un artefacto doméstico que funciona con energía solar, su característica principal es que permite cocinar los alimentos a temperaturas más bajas que por métodos convencionales, lo cual tiene efectos beneficiosos en el sabor y en la calidad nutricional de las preparaciones. Además, no requiere el uso de elementos combustibles para generar el calor necesarios para la cocción.",
      texto2:"La energía solar es una de las fuentes de energía renovables más versátil porque sirve para generar energía eléctrica, climatizar ambientes interiores, calentar agua, cocinar alimentos, etc. En esta experiencia les proponemos construir un horno solar, con materiales económicos, para aprovechar la energía del sol para hacer unos ricos bombones de chocolate.",
      pdf: "https://drive.google.com/file/d/1WocJ-oX1ctTK0ahqALHkx_CF8NLAIuOo/preview",
      img: this.images
    });
    this.ambiental.push({
      nombre: "¡Cuidado, agua ácida!",
      titulo1:"Objetivo de la actividad",
      texto1: "La lluvia ácida y la acidificación de los océanos son dos problemas que generan impactos negativos en el medio ambiente. En esta actividad se propone mostrar el efecto de la acidificación del agua, realizando dos (2) experiencias de laboratorio sencillas, disolución de cáscara de huevo y de tizas blancas.",
      texto2: "La cáscara de huevo, compuesta por carbonato de calcio (o calcita), se disuelve fácilmente en agua ácida. Esto es equivalente a lo que ocurre en los monumentos o edificios con la lluvia ácida, o en los arrecifes de coral con la acidificación de los océanos. La tiza, compuesta por una mezcla de carbonato de calcio (o calcita) y sulfato de calcio, se disuelve fácilmente en agua ácida. Esto es equivalente a lo que ocurre en los monumentos o edificios con la lluvia ácida, o en los arrecifes de coral con la acidificación de los océanos.",
      videoUrl: "https://www.youtube.com/embed/mBhGpYehgT4",
      pdf:"https://drive.google.com/file/d/1Ca716t5g6AKXy-MPbAPtSaRNfodXscfC/preview",
    });
    this.ambiental.push({
      nombre: "¡No se puede respirar!", 
      titulo1:"Lluvia ácida",
      texto1: "En esta actividad se propone mostrar y pensar el efecto de la contaminación atmosférica en la calidad del agua de lluvia, mediante una experiencia sencilla que puede realizarse con elementos disponibles en sus hogares."   ,
      texto2: "Los procesos que implican combustión, tanto en industrias como en automóviles y calefacciones residenciales, generan emisiones de diferentes sustancias que contaminan la atmósfera. Estas emisiones de partículas y gases al entrar en contacto con el agua de lluvia, generan la conocida lluvia ácida.",
      videoUrl: "https://www.youtube.com/embed/sGH6ZTMrkzs",
      pdf:"https://drive.google.com/file/d/1hD-SzvIdDcqNKXq1Qfo_UcQS1PhDdcgh/preview",
    });
    this.ambiental.push({
      nombre: "Limpiemos el agua",
      titulo1: "¿Qué es la contaminación del agua?",
      texto1: "Los procesos que implican combustión, tanto en industrias como en automóviles y calefacciones residenciales, generan emisiones de diferentes sustancias que contaminan la atmósfera. Estas emisiones de partículas y gases al entrar en contacto con el agua de lluvia, generan la conocida lluvia ácida.",
      texto2: "En esta actividad se propone mostrar y pensar el efecto de la contaminación atmosférica en la calidad del agua de lluvia, mediante una experiencia sencilla que puede realizarse con elementos disponibles en sus hogares.",
      videoUrl: "https://www.youtube.com/embed/IqTuG3NmyuM",
      pdf: "https://drive.google.com/file/d/1nFWguKQ3RTwOHI_833er3KyUCeyPUILY/preview",
    });
    this.ambiental.push( {
      nombre: "S.O.S aguas calientes",
      titulo1:"Efecto de la temperatura de los efluentes",
      texto1: "El agua (o los efluentes) a temperatura más caliente flota, generando una capa superficial menos aireada, ya que a mayor temperatura el oxígeno tiene menor capacidad de disolución en agua. Esto afecta la vida en el interior de dicho cuerpo de agua.",
      texto2: "En esta actividad les proponemos observar qué ocurre cuando mezclamos aguas a diferentes temperaturas, simulando lo que ocurre cuando se vierten efluentes a distintos cuerpos de agua, como por ejemplo los ríos.",
      videoUrl:"https://www.youtube.com/embed/vtKqOcvkZYI",
      pdf:"https://drive.google.com/file/d/1UJC3WfXTiOoHQWluHZJm6QAQl-4u05dm/preview",
    });
    this.ambiental.push( {
      nombre: "Crucigrama ambiental",
      texto2:"Si ya recorriste las actividades de Medio Ambiente, te invitamos a que resuelvas un crucigrama para que pongas a prueba lo que aprendiste!",
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
    if (this.activitySelected.pdf != null){
      this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.activitySelected.pdf);
    }
  }
}
