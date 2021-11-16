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

  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.hidrica.push({
      nombre: "Cuando el río suena...",
      url: "https://wordwall.net/es/embed/851d1da115d84e71b01d0bbe744affe2?themeId=45&templateId=72",
      width: "500px",
      height: "380px",
    });
    this.hidrica.push({
      nombre: "La movida del agua"
    });
    this.hidrica.push({
      nombre: "¡Qué tiempo loco!",
      url: "https://wordwall.net/es/embed/320e30afe360492cac563c6e644c6fed?themeId=2&templateId=25",
    });

  }

  selectedActivity(event: actividad){
    this.activitySelected = event;
    if(this.activitySelected.url != null){
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.activitySelected.url);
    }
  }


}
