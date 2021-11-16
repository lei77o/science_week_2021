import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InformaticaComponent } from './components/sections/informatica/informatica.component';
import { HidrologiaComponent } from './components/sections/hidrologia/hidrologia.component';
import { AmbientalComponent } from './components/sections/ambiental/ambiental.component';
import { AgrimensuraComponent } from './components/sections/agrimensura/agrimensura.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    InformaticaComponent,
    HidrologiaComponent,
    AmbientalComponent,
    AgrimensuraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
