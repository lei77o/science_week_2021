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
import { AppReconComponent } from './components/sections/informatica/app-recon/app-recon.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


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
    AgrimensuraComponent,
    AppReconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
